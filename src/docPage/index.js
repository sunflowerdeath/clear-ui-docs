import React from 'react'
import Markdown from 'react-markdown-it'

import css from './index.scss'

class DocPage extends React.Component {
	render() {
		let [firstChild, ...restChildren] = this.props.children
		if (firstChild.type === 'h1') {
			firstChild = React.cloneElement(firstChild, {
				style: {...firstChild.props.style, marginTop: 0}
			}, firstChild.props.children)
		}
		let children = [firstChild, ...restChildren]

		return React.DOM.div({
			className: css.docPage,
			style: {
				fontFamily: 'Roboto', padding: '2rem',
				margin: 'auto', width: '800px'
			}
		},
			React.createElement(Markdown, {options: {html: true}}, children)
		)
	}
}

export default DocPage