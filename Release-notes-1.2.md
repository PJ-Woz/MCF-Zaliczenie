# Release notes v. 1.2

## HTML
- Added a new logo and favicon
- Added alt text to images
- Added conditional tags for HTML and PDF output in the following:
	- `Introduction.htm`
	- all pages with exercises for JS files.
	- `Image Sources.htm`
- Added snippets for JS files
- Fixed `Quick Links` section to link to the PDF Guide
- Changed `Created With Effort Using MadCap Flare` to `Created Using MadCap Flare`. This will eventually land as a portfolio, so prospective hiring people would better **not** know how much effort was put ;)
- Changed the hyperlink of the logo in the main page, bottom panel
- Couldn't remove `Bullet Point` in the `Glossary`. In the `Inspect` in the browser, the object is called `marker`. Couldn't find how to remove it.
- Broken top panel into new sections. Kept `Training Session` as one, because I plan to extend it in the future (hopefully! the licence is too short...)
- Moved `Menu Proxy` to the bottom. Tried to push it to the right, but the result was even worse. Decided to leave it, because users may want to know what is coming or to quickly go back if they misclick something
- How the main page was fixed from three tiles to two:
	- Noticed that the top DIV bar of the tiles is still divided in three, but the third element wasn't there anymore
	- Used style inspector to see what sort of settings are there
	- The tiles `Introduction` and `Knowledge Base` had 33,(3)% width
	- The tiles are named  `div:nth-child(1)`  `div:nth-child(2)`, `div:nth-child(3)`
	- Tracked it in the Styles.css, but MadCap didn't allow deleting the third empty child
	- Opened the Styles.css in the text editor, found the `div:nth-child(3)` and manually deleted it
	- Had to realign the remaining tiles and that solved the problem :)

## PDF

- Fixed the `Title Page`:
	- Added more variables
	- Added new logo
- Reduced font size in `Table of Contents`
- Fixed variables in the `Footer`
- Added paragraphs to `Introduction`:
	- In the HTML output, they are in a new page
- Decided to keep the `Warm-up` and `Cooldown` exercises separate to smooth the progression between them:
	- Planning to add photos of the exercises to the portfolio version, so the space will be filled
	- Aware this rule is somewhat broken in `Rounds 1, 2, and 3`, but this is because every round is done three times, so it would significantly inflate the number of pages :)
		- However, the final (i.e. portfolio) layout depends on the added images
- Fixed typo in `Alternating Quad Stretch`
