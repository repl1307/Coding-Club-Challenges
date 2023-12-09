const tabContainers = document.querySelectorAll('.tab-container');
const tabHeaders = document.querySelectorAll('.tab-header');

//loop through tab headers and add tab functionalitiy
for(let i = 0; i < tabHeaders.length; i++){
  const currentTabContainer = tabContainers[i];
  const currentTabHeader = tabHeaders[i];
  //loop throught each button in tab header and add click event
  for(const button of currentTabHeader.children){
    button.addEventListener('click', e => {
      let index;
      for(let j = 0; j < currentTabHeader.children.length; j++){
        const c = currentTabHeader.children[j];
        c.classList.remove('selected');
        if(c == button){
          index = j;
        }
      }
      button.classList.add('selected');
      for(const t of currentTabContainer.children)
        t.classList.remove('selected');
      currentTabContainer.children[index].classList.add('selected');
    });
  }
}

// remove blank first line in code elements
const codeElements = document.querySelectorAll('code');
for(const c of codeElements)
  c.textContent = c.textContent.replace('\n', '');
