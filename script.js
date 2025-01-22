// script.js
document.getElementById('addMemberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const phone = document.getElementById('memberPhone').value;

    const member = { name, email, phone };
    addMemberToList(member);
    document.getElementById('addMemberForm').reset();
});

function addMemberToList(member) {
    const memberList = document.getElementById('memberList');
    const li = document.createElement('li');
    li.textContent = `اسم: ${member.name}, البريد: ${member.email}, الهاتف: ${member.phone}`;
    memberList.appendChild(li);
}
