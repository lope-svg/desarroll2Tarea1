module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/tu-usuario/tu-repo', // Reemplaza con la URL de tu repositorio
  plugins: [
    '@semantic-release/commit-analyzer',  // Analiza los mensajes de commit para determinar el tipo de release
    '@semantic-release/release-notes-generator',  // Genera las notas de la release
    '@semantic-release/changelog',  // Actualiza el archivo CHANGELOG.md
    '@semantic-release/npm',  // Publica en npm si es necesario
    '@semantic-release/github',  // Publica la release en GitHub
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],  // Los archivos que deben ser committeados automáticamente
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
