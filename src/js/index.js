const users = [
  {
    name: "Adil Bel Mqadem",
    login: "abel-mqa",
    projects: [
      "projects/abel-mqa/abel-mqa/challenge-one/",
      "projects/abel-mqa/abel-mqa/challenge-two/",
      "projects/abel-mqa/abel-mqa/challenge-three/",
    ],
  },
  {
    name: "El Mokhtar Ouhrich",
    login: "eouhrich",
    projects: [
      "projects/eouhrich/eouhrich/challenge 1/",
      "projects/eouhrich/eouhrich/challenge 2/",
      "projects/eouhrich/eouhrich/challenge 3/",
    ],
  },
  {
    name: "Anas Chahid Ksabi",
    login: "achahid-",
    projects: ["projects/achahid/achahid-/"],
  },
  {
    name: "Ayoub Echchariy",
    login: "ayechcha",
    projects: ["projects/ayechcha/ayechcha/"],
  },
  {
    name: "Lahoucine Aoubaidi",
    login: "laoubaid",
    projects: ["projects/laoubaid/laoubaid/"],
  },
  {
    name: "Mohamed Kartit",
    login: "mkartit",
    projects: ["projects/mkartit/mkartit/"],
  },
  {
    name: "Smail Aderdour",
    login: "saderdou",
    projects: ["projects/saderdou/saderdou/"],
  },
];

const Card = ({ login, name, projects }) => `
<article class="profile">
      <div class="profile-info">
	  <div class="profile-image">
        <img src="src/assets/${login}.jpeg" />
      </div>
      <h2 class="profile-username">${name}</h2>
      <a class="profile-user-handle" href="https://profile.intra.42.fr/users/${login}" target="_blank">@${login}</a>
	  </div>
      <div class="profile-actions">
	  ${projects
      .map(
        (project, index) =>
          `<a class="btn btn--primary" href="${project}" target="_blank">${
            "Challenge " + (projects.length > 1 ? index + 1 : "") + " solution"
          }</a>`
      )
      .join("")}
      </div>
    </article>
`;

const projects_container = document.querySelector(".projects");

users.forEach((user) => {
  projects_container.innerHTML += Card(user);
});
