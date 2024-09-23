const bcrypt = require('bcrypt');

async function comparePasswords() {
    const data = "minhasenha";
    const encrypted =
      '$2b$10$ydD4vEcmxuK5I0F1Zt1nC.d9FwmtoR3.mqNny7O30v/DvaDKgYJ56';

    const result = await bcrypt.compare(data, encrypted);

    console.log(result)
}

comparePasswords();