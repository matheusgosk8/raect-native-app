import fs from 'fs';
import path from 'path';

// Caminho onde as migrações estão localizadas
const migrationsDir = path.join(__dirname, 'src/migrations');

// Função para alterar as migrações
function addIfNotExistsToMigrations(): void {
  // Lê todos os arquivos da pasta de migrações
  fs.readdirSync(migrationsDir).forEach((file) => {
    const filePath = path.join(migrationsDir, file);

    // Verifica se o arquivo é de migração (exemplo: arquivos .sql ou .ts)
    if (file.endsWith('.sql') || file.endsWith('.ts')) {
      // Lê o conteúdo do arquivo de migração
      const migrationContent = fs.readFileSync(filePath, 'utf-8');

      // Substitui os comandos CREATE TABLE por CREATE TABLE IF NOT EXISTS
      const updatedContent = migrationContent.replace(/CREATE TABLE/g, 'CREATE TABLE IF NOT EXISTS');

      // Sobrescreve o arquivo com o conteúdo modificado
      fs.writeFileSync(filePath, updatedContent);
      console.log(`Migração ${file} modificada.`);
    }
  });
}

// Executa a função
addIfNotExistsToMigrations();
