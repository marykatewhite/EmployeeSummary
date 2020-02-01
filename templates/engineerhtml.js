function engineercard(team) {
    return `<div class="card" style="width: 18rem;">
    <div class="card-header">
    Engineer: ${team.name}
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${team.id}</li>
    <li class="list-group-item">Email: ${team.email}</li>
    <li class="list-group-item">Role: ${team.role}</li>
    <li class="list-group-item">Github: ${team.github}</li>
    </ul>
    </div>`;
}
module.exports = engineercard;