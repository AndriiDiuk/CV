import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		border: 0;
	}

	*,
	*:before,
	*:after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}

	:focus,
	:active {
		outline: none;
	}

	a:focus,
	a:active {
		outline: none;
	}

	nav,
	footer,
	header,
	aside {
		display: block;
	}


	input,
	button,
	textarea {
		font-family: inherit;
	}

	input::-ms-clear {
		display: none;
	}

	html{ 
		scroll-behavior: initial; 
	} 

	html, body, #root { 
		min-height: 100%; 
		height:auto; 
	} 

  body {
    font-family: "Monda";
    font-weight: 400;
	 font-size: 18px;
	 line-height: 1.3;
    min-height: 100%;
	 overflow-x: hidden;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
		cursor: pointer;
		background: transparent;
		border: none;
		color: inherit;
	}

	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}


	a,
	a:visited {
		text-decoration: none;
		color:inherit;
	}

	a:hover {
		text-decoration: none;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
		margin: 0;
		padding: 0;
	}

	scrollbar-width: 8px; 
	scrollbar-color: #1E96FC #13293D;

	scrollbar-thumb {
 	 border-radius: 10px; 
 	 background-color: #1E96FC; 
	}

	scrollbar-track {
 	 background-color: #13293D; 
	}

	::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    min-height: 50px;
    background-color: #1E96FC;
  }
  
  ::-webkit-scrollbar-track{
    background-color: #13293D;
  }


`;
