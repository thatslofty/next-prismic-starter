import React, { Fragment } from 'react'
import ReactMarkdown from 'react-markdown'

export const CopyContext = React.createContext({})

export const Copy = ({ title, ...props }) => (
  <CopyContext.Consumer>
    {(allCopy) => {
      const copy = allCopy.filter(obj => obj.title[0].text === title)
      if (copy.length > 0) {
        return (
          <Fragment>
            {copy[0].copy.map(cp => (
              <ReactMarkdown key={cp.text} source={cp.text} {...props} />
            ))}
          </Fragment>
        )
      }
      return <div />
    }}
  </CopyContext.Consumer>
)
