import styledNormalize from "styled-normalize";
import { injectGlobal } from "styled-components";

injectGlobal`

  body {
    a {
      color: rgb(102, 102, 102);
      text-decoration: none;
      border-bottom: 1px dotted #666;
    }
    a:hover{
      color: #6bd4c8;
      border-bottom: none;
    }
    h1 {font-size: 2.2rem}
    h2 {font-size: 2rem}
    	blockquote {
      border-left: solid 4px hsla(0,0%,56%,.5);
      font-style: italic;
      margin: 0 0 2rem 0;
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
