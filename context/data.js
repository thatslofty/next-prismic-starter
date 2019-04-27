// load in sync for requests
const request = require('sync-request')

// cms api url
const url = 'https://rocktech.cdn.prismic.io/api/v2'

// get required ref from prismic
const refReq = request('GET', url)
const { ref } = JSON.parse(refReq.getBody('utf8')).refs.find(obj => obj.id === 'master')

// define func for data requests
const get = (predicate) => {
  const getReq = request('GET', `${ url }/documents/search?ref=${ ref }&q=[[${ predicate }]]`)
  return JSON.parse(getReq.getBody('utf8'))
}

const Products = get('at(document.type,"products")').results
const Copy = get('at(document.type,"copy")').results[0].data.all_copy
const Images = get('at(document.type,"images")').results[0].data.images
const ProductData = get('at(document.tags, ["product_data"])').results
const Contact = get('at(document.type,"contact_info")').results[0].data
const { history } = get('at(document.type,"history")').results[0].data
const team = get('at(document.type,"team_members")').results
const equipment = get('at(document.type,"used_equipm")').results
const News = get('at(document.type,"news")').results

module.exports = {
  Products,
  Copy,
  Images,
  ProductData,
  Contact,
  history,
  team,
  equipment,
  News
}
