function interncard(team) {
  return `<div class="card" style="width: 18rem;">
            <div class="card-header">
            Intern: ${team.name}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team.id}</li>
            <li class="list-group-item">Email: ${team.email}</li>
            <li class="list-group-item">Role: ${team.role}</li>
            <li class="list-group-item">School: ${team.school}</li>
            </ul>
            </div>`;
}

module.exports = interncard;