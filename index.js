const users = [
  {
    name: "Adil Bel Mqadem",
    login: "abel-mqa",
    projects: [
      "/abel-mqa/abel-mqa/challenge-one/",
      "/abel-mqa/abel-mqa/challenge-two/",
      "/abel-mqa/abel-mqa/challenge-three/",
    ],
  },
  {
	name: "El Mokhtar Ouhrich",
	login: "eouhrich",
	projects: [
	  "/eouhrich/eouhrich/challenge 1/",
	  "/eouhrich/eouhrich/challenge 2/",
	  "/eouhrich/eouhrich/challenge 3/",
	],
  },
  {
    name: "Anas Chahid Ksabi",
    login: "achahid-",
    projects: ["/achahid/achahid-/"],
  },
  {
    name: "Ayoub Echchariy",
    login: "ayechcha",
    projects: ["/ayechcha/ayechcha/"],
  },
  {
    name: "Lahoucine Aoubaidi",
    login: "laoubaid",
    projects: ["/laoubaid/laoubaid/"],
  },
  {
    name: "Mohamed Kartit",
    login: "mkartit",
    projects: ["/mkartit/mkartit/"],
  },
  {
    name: "Smail Aderdour",
    login: "saderdou",
    projects: ["/saderdou/saderdou/"],
  },
];

const Card = ({ login, name, projects }) => `
<article class="profile">
      <div class="profile-info">
	  <div class="profile-image">
        <img src="assets/${login}.jpeg" />
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
