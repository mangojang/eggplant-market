import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
     ${reset};
     * {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

html,
body,
div,
span,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
i,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
figure,
figcaption,
footer,
header,
hgroup,
nav,
output,
section,
time,
mark,
audio,
video,
select,
button,
input {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
	-webkit-text-size-adjust: 100%;
}
html,
body {
	width: 100%;
	height: 100%;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
tr,
th,
td {
	vertical-align: middle;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
body {
	font: 100%;
	color: #000;
}
ol,
ul,
li {
	list-style: none;
}
ul::after,
ol::after,
.clb::after {
	content: '';
	display: block;
	clear: both;
}

li,
dl {
	float: left;
}
blockquote,
q {
	quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a {
	text-decoration: none;
	color: #333;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	-webkit-tap-highlight-color: transparent;
}
a:hover {
	text-decoration: none;
}
caption,
legend {
	display: none;
}
input,
select {
	font: 100%;
	outline: none;
	border-radius: 0;
	-webkit-border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
select::-ms-expand {
	display: none;
}
input {
	border-radius: 0;
	-webkit-border-radius: 0;
	-webkit-appearance: none;
}
input[type='checkbox'],
input[type='radio'] {
	background: none;
	border: none;
	cursor: pointer;
}
input[type='submit'] {
	cursor: pointer;
}
strong {
	font-weight: bold;
}
input:focus::-webkit-input-placeholder,
textarea:focus::-webkit-input-placeholder {
	color: transparent;
}

input:focus:-moz-placeholder,
textarea:focus:-moz-placeholder {
	color: transparent;
}

input:focus::-moz-placeholder,
textarea:focus::-moz-placeholder {
	color: transparent;
}

input:focus:-ms-input-placeholder,
textarea:focus:-ms-input-placeholder {
	color: transparent;
}

input:-ms-input-placeholder {
	color: #ccc;
}

input::-webkit-input-placeholder {
	color: #ccc;
}

input::-moz-placeholder {
	color: #ccc;
}

input::-moz-placeholder {
	color: #ccc;
}

button {
	background-color: transparent;
	color: inherit;
}
button:focus {
	outline: none;
}

    :root{
      --primary-color: #312e81;
      --hover-color: #4338ca;
      --text-color: white;
    }
    html,body {
      font-size: 62.5%;
    }
    
`;

export default GlobalStyle;
