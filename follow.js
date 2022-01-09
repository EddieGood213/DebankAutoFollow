// Click Follow button on follower/following list page
function followUsers() {
  const followBtns = Array.from(document.querySelectorAll('.db-table-body button'))
  .filter(el => el.textContent === 'Follow' && el.textContent != 'UnFollow'); 

  followBtns.forEach((el, i) => {
  setTimeout(() => {
    console.log(el.textContent);  
    el.click();  
  }, i * 500);
  });
}

followUsers();