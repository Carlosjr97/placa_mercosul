function generatePassword() {
  const passwordOutput = document.getElementById('password-output');

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';

  let password = '';

  // Primeira, segunda e terceira strings - letras aleatórias
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    password += letters[randomIndex];
  }

  // Quarta string - número aleatório
  const randomNumIndex = Math.floor(Math.random() * numbers.length);
  password += numbers[randomNumIndex];

  // Quinta e sexta strings - letras aleatórias
  for (let i = 0; i < 1; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length);
    password += letters[randomIndex];
  }
  const randomNumIndex2 = Math.floor(Math.random() * numbers.length);
  password += numbers[randomNumIndex2];

  // Sétima string - número aleatório
  const randomNumIndex3 = Math.floor(Math.random() * numbers.length);
  password += numbers[randomNumIndex2];

  passwordOutput.textContent = password;
}

