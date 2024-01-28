console.log('remove twitter tab notification number loaded')
// change notification
new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        const targetNode = mutation.target;
        if (targetNode.nodeName === 'TITLE' || (targetNode.nodeName === 'HEAD' && targetNode.querySelector('title'))) {
            const newTitle = document.title;

            if (/^\((.*?)\)\s/.test(newTitle)) {
                document.title = newTitle.replace(/^\((.*?)\)\s/, "");
            }
        }
    });
})
.observe(document.head, {childList: true, subtree: true});

// change tab icon with red dot back to the base one
new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      const targetNode = mutation.target;
      if (targetNode.nodeName === 'LINK' && targetNode.rel === 'shortcut icon') {
        const newHref = targetNode.getAttribute('href');
        console.log(newHref)
        if (newHref === 'https://abs.twimg.com/favicons/twitter-pip.3.ico') {
          // Change the href to the desired value
          targetNode.setAttribute('href', '//abs.twimg.com/favicons/twitter.3.ico');
          console.log('Favicon changed!');
        }
      }
    });
  })
  .observe(document.head, {attributes: true, subtree: true, attributeFilter: ['href']});
  