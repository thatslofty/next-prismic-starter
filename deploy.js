const octokit = require('@octokit/rest')()

module.exports = async (req, res) => {
  const { GIT_TOKEN } = process.env

  octokit.authenticate({
    type: 'token',
    token: GIT_TOKEN
  })

  const repo = 'rocktech'
  const owner = 'alexmarmon'
  const message = 'Automated Deploy From Prismic'
  const ref = 'heads/master'

  const getRef = await octokit.git.getRef({ owner, repo, ref })
  const referenceCommitSha = getRef.data.object.sha

  const getCommit = await octokit.repos.getCommit({ owner, repo, sha: referenceCommitSha })
  const treeSha = getCommit.data.commit.tree.sha

  const createCommit = await octokit.git.createCommit({ owner, repo, message, tree: treeSha, parents: [referenceCommitSha] })
  const newCommitSha = createCommit.data.sha

  const updateRef = await octokit.git.updateRef({ owner, repo, ref, sha: newCommitSha })
  const result = updateRef.status

  res.end(result === 200 ? 'done' : 'error')
  // console.log(req)
  // res.end(req)
}
