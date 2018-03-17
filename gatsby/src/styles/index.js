import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

export default () => injectGlobal`
  ${styledNormalize}

  @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300italic,400,400italic");

  body {
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 2rem;
    color: rgb(102, 102, 102);
    padding: 0;
    a {
      color: rgb(102, 102, 102);
      text-decoration: none;
      border-bottom: 1px dotted #666;
    }
    a:hover{
      color: #6bd4c8;
      border-bottom: none;
    }
    h1,h2,h3,h4,h5{font-weight: 300;font-stretch: 100%}
    h1 {font-size: 2.2rem}
    h2 {font-size: 2rem}
    	blockquote {
      border-left: solid 4px hsla(0,0%,56%,.5);
      font-style: italic;
      margin: 0 0 0 0;
      padding: 0.5em 0 0.5em 2em;
    }
    code {
		background: rgba(143, 143, 143, 0.075) ;
		border-radius: 0.3rem;
		border: solid 1px rgba(143, 143, 143, 0.075) ;
		font-family: "Courier New", monospace ;
		font-size: 0.9em;
		margin: 0 0.25em;
		padding: 0.25em 0.65em;
		display: inline;
    }

   pre {
		-webkit-overflow-scrolling: touch;
		font-family: _font(family-fixed);
		font-size: 0.9em;
		margin: 0 0 _size(element-margin) 0;

		code {
			display: block;
			line-height: 1.75em;
			padding: 1em 1.5em;
			overflow-x: auto;
		}
	}
  }
`;
