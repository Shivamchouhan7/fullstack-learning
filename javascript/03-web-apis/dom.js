// Guard for Node.js: DOM APIs exist only in browser environments.
if (typeof document === 'undefined') {
	console.log('This file uses DOM APIs. Open dom.html in a browser.');
} else {
	// querySelector returns the first matching element.
	const button = document.querySelector('.my-button');
	const div = document.querySelector('.my-div');

	// Document object gives metadata and global page collections.
	console.log('--- Document properties ---');

	console.log('Document title:', document.title);
	console.log('Document url:', document.URL);
	console.log('Document domain:', document.domain);
	console.log('head exists:', !!document.head);
	console.log('body exists:', !!document.body);
	console.log('forms length:', document.forms.length);
	console.log('images length:', document.images.length);
	console.log('links length:', document.links.length);
    
	console.log('cookie:', document.cookie);
    // readyState indicates loading status: 'loading', 'interactive', 'complete'.
	console.log('readyState:', document.readyState);

	// Element properties describe structure, text, classes, and attributes.
	console.log('--- Element properties (.my-button) ---');
	if (button) {
		console.log('id:', button.id);
		console.log('className:', button.className);
		console.log('classList:', button.classList.value); // classList is easier for add/remove/toggle.
		console.log('innerHTML:', button.innerHTML);
		console.log('innerText:', button.innerText); // Rendered/visible text.
		console.log('textContent:', button.textContent); // Raw text, including hidden text.
		console.log('style object exists:', !!button.style);
		console.log('children length:', button.children.length); // Element nodes only.
		console.log('childNodes length:', button.childNodes.length); // Includes text/comment nodes.
		console.log('parentElement:', button.parentElement?.tagName);
		console.log('nextElementSibling:', button.nextElementSibling?.tagName);
		console.log('attributes length:', button.attributes.length);
	}

	// window object provides browser-level info (BOM).
	console.log('--- Window/BOM properties ---');
	console.log('innerWidth:', window.innerWidth);
	console.log('innerHeight:', window.innerHeight);
	console.log('scrollX:', window.scrollX);
	console.log('scrollY:', window.scrollY);
	console.log('location.href:', window.location.href);
	console.log('history length:', window.history.length);
	console.log('navigator userAgent:', window.navigator.userAgent);

	// Selector and finder methods are the most-used DOM lookup APIs.
	console.log('--- Common DOM methods ---');
	console.log('getElementById:', document.getElementById('demo-id'));
	console.log('getElementsByClassName:', document.getElementsByClassName('my-button').length);
	console.log('getElementsByTagName:', document.getElementsByTagName('button').length);
	console.log('querySelector:', document.querySelector('.my-div'));
	console.log('querySelectorAll:', document.querySelectorAll('button').length);

	if (div) {
		// setAttribute/getAttribute work with any valid HTML attribute.
		div.setAttribute('data-topic', 'dom');
		console.log('getAttribute data-topic:', div.getAttribute('data-topic'));
		// classList helpers are cleaner than manually editing className strings.
		div.classList.add('active');
		div.classList.remove('active');
		div.classList.toggle('highlight');
		// insertAdjacentHTML injects HTML without replacing existing content.
		div.insertAdjacentHTML('beforeend', ' <strong>(updated)</strong>');
	}

	// createElement + appendChild are fundamental for dynamic DOM creation.
	const p = document.createElement('p');
	p.textContent = 'Created by createElement + appendChild';
	document.body.appendChild(p);
}
