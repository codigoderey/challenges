// generate head conent component to reuse across html files
export function generateHeadAndScriptContent(title, description) {
	const flowBiteScript = document.createElement("script");
	flowBiteScript.src =
		"https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js";
	document.body.insertBefore(flowBiteScript, document.body.lastChild);

	return `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <link rel="stylesheet" href="assets/css/styles.css" />
    <link href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css" rel="stylesheet" />
  `;
}
