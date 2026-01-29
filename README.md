# SmartMentor_UPTA
 sistema de gestión financiera para postgrado que segmenta cobros por trimestres y años. Esto requiere una lógica de "mapeo anidado" en Solidity y una interfaz dinámica en React.


 contrato:0x86e0CaaBF647DBAb3cCaA47725de6F0657Be6194

 verificado:https://sepolia.etherscan.io/address/0x86e0CaaBF647DBAb3cCaA47725de6F0657Be6194

Paso 1  
git clone https://github.com/scaffold-eth/scaffold-eth-2.git SmartMentor-UPTA
cd SmartMentor-UPTA

<img width="421" height="315" alt="image" src="https://github.com/user-attachments/assets/3627b536-5c39-475e-b01b-48731aa46139" />


Paso 2
yarv install

<img width="334" height="211" alt="image" src="https://github.com/user-attachments/assets/1717741d-a5a2-4a8a-8864-878c08a0c825" />


Paso 3 
yarn chain

<img width="523" height="341" alt="image" src="https://github.com/user-attachments/assets/fae7c5d3-1349-4051-9eb7-b4ab5a31ccca" />

Paso 4
yarn deploy

<img width="527" height="259" alt="image" src="https://github.com/user-attachments/assets/e4e5424a-7a2d-47c6-a3c4-c7c833f3c0b8" />


Paso 5
yanr start

<img width="528" height="246" alt="image" src="https://github.com/user-attachments/assets/c7af9f33-1632-4a4a-962c-6142ff5103e1" />


Paso 6
 Para evitar errores de rutas, te recomiendo borrar (o mover a otro lado) el archivo package-lock.json que está en C:\Users\Personal\. Scaffold-ETH 2 usa Yarn, por lo que solo debería existir el yarn.lock dentro de la carpeta de tu proyecto.
 Sincroniza el Contrato (Paso Vital)
 
Aunque el frontend (yarn start) ya encendió, recuerda que para que los pagos funcionen, necesitas tener la "otra mitad" encendida. Si aún no lo has hecho, abre otras dos terminales y ejecuta:
Terminal 2: yarn chain (Para encender la red de pruebas local).
Terminal 3: yarn deploy (Para que el frontend sepa dónde está el contrato de postgrado).

<img width="571" height="210" alt="image" src="https://github.com/user-attachments/assets/4966a194-0a86-4ac2-b235-ed2faf89dc28" />

$ yarn deploy
Nothing to compile
No need to generate any newer typings.
deploying "YourContract" (tx: 0x54a6fbd51faa75f8b2ee510b48c06e0c8e9617a4cbf36aad
7167f916dedd98d1)...: deployed at 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512 wit
h 534174 gas
👋 Initial greeting: Building Unstoppable Apps!!!
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedCo
ntracts.ts


Paso 7
mi dapp

<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/57b37798-7131-4cbb-9702-a4283f8f6e77" />
<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/4e00b330-f469-4b16-87c3-3529271008c3" />


Paso 8 haciendo modificaciones

<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/594305c0-ca36-4716-bee5-163b3e8408f8" />

Paso 9
Módulo de Registro y Flujo de Trabajo
•  Módulo de Registro: Añadí una nueva pestaña ("Registrar Nuevo") con un formulario funcional. Ahora puedes escribir el nombre, la cédula y la wallet del estudiante. Al darle a "Finalizar Registro", el alumno aparecerá automáticamente en la lista de cobro.
•  Flujo de Trabajo: * Registras al estudiante en la pestaña de registro.
•	Vas a la pestaña de listado.
•	Le das clic a "COBRAR" y se abre Metamask para ejecutar el pago en la blockchain.

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d7408636-b0ba-4252-84ab-4ad73ff5d73f" />

Paso 10
Configurar la Red en tu Billetera (MetaMask)

Para conectar tu wallet (como MetaMask) a la red de Hardhat y poder registrar/cobrar sin gastar dinero real, sigue estos pasos:
 Configurar la Red en tu Billetera (MetaMask)
Para que tu wallet "vea" a Hardhat, debes agregar la red local manualmente:
•	Nombre de la red: Hardhat Local
•	RPC URL: http://127.0.0.1:8545
•	ID de cadena (Chain ID): 31337
•	Símbolo de moneda: ETH
Importar Cuentas de Prueba
Hardhat te da 20 cuentas con 10000 ETH de prueba cada una. Para usarlas:
1.	En tu terminal, donde corriste yarn chain, verás una lista de Private Keys.
2.	Copia una clave privada.
3.	En MetaMask, ve a Importar cuenta y pega la clave. Ahora tendrás saldo para interactuar con el contrato de la UPTA.


Paso 11

<img width="543" height="549" alt="image" src="https://github.com/user-attachments/assets/a9247b62-c28e-467a-b364-83810f9d7099" />


Paso 12
limpieza de  todo rastro de "YourContract" 

Para que SmartMentor UPTA funcione, debemos limpiar todo rastro de "YourContract" en este script. Si no lo haces, Hardhat buscará un archivo que ya no existe y el despliegue fallará.
Aquí tienes el código de 00_deploy_your_contract.ts actualizado específicamente para tu proyecto. He eliminado la línea del console.log del "greeting" (saludo), ya que tu contrato de gestión contable seguramente no usa esa función.

<img width="572" height="310" alt="image" src="https://github.com/user-attachments/assets/042d2154-37ef-4fd2-8379-b6438de13f72" />


Paso 13
Exactamente. Para que SmartMentor UPTA funcione, debemos limpiar todo rastro de "YourContract" en este script. Si no lo haces, Hardhat buscará un archivo que ya no existe y el despliegue fallará.
Aquí tienes el código de 00_deploy_your_contract.ts actualizado específicamente para tu proyecto. He eliminado la línea del console.log del "greeting" (saludo), ya que tu contrato de gestión contable seguramente no usa esa función.

<img width="618" height="319" alt="image" src="https://github.com/user-attachments/assets/5b692cf0-6403-48f1-8b5b-e833ee26bac7" />


TypeScript
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

/**
 * Despliega el contrato SmartMentorUPTA para la gestión de postgrado.
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySmartMentorUPTA: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("SmartMentorUPTA", {
    from: deployer,
    // Si tu contrato NO pide la dirección del admin en el constructor, 
    // cambia [deployer] por []
    args: [deployer], 
    log: true,
    autoMine: true,
  });

  // Obtenemos el contrato desplegado para confirmar la dirección en consola
  const smartMentor = await hre.ethers.getContract<Contract>("SmartMentorUPTA", deployer);
  console.log("✅ SmartMentor UPTA desplegado correctamente en:", await smartMentor.getAddress());
};

export default deploySmartMentorUPTA;

// Etiqueta para ejecutar solo este script si fuera necesario
deploySmartMentorUPTA.tags = ["SmartMentorUPTA"];
Cambios realizados:
•	Nombre del Contrato: Se cambió "YourContract" por "SmartMentorUPTA".
•	Referencia de Ethers: La constante ahora se llama smartMentor para que sea coherente con tu proyecto.
•	Limpieza de Lógica: Eliminé el comando await yourContract.greeting(), que es el que causa errores si tu contrato no tiene una función de saludo (muy probable en un sistema de cobro).
•	Tags: Actualicé el tag final para que puedas desplegar usando yarn deploy --tags SmartMentorUPTA.
Nota Importante sobre los args:
En la línea args: [deployer],, le estamos enviando la dirección de tu wallet al contrato al momento de nacer.
•	Si tu contrato tiene esto: constructor(address admin) { ... }, déjalo así.
•	Si tu contrato tiene esto: constructor() { ... } (vacío), cámbialo a args: [],.


Paso 14
para activar los mores nuevamente

<img width="622" height="361" alt="image" src="https://github.com/user-attachments/assets/aba7f176-8364-474e-a05d-d75a4d7ca2f8" />


Paso 15
yarn chain,yarn deploy,yarn chain

$ yarn deploy
Nothing to compile
No need to generate any newer typings.
deploying "SmartMentorUPTA" (tx: 0xcd88724e2c6a70f0fe2823ac507581ed04384d718d6c1
62475871a9841d583a7)...: deployed at 0x5FbDB2315678afecb367f032d93F642f64180aa3
with 299070 gas
✅ SmartMentor UPTA desplegado correctamente en: 0x5FbDB2315678afecb367f032d93F64
2f64180aa3
📝 Updated TypeScript contract definition file on ../nextjs/contracts/deployedCo
ntracts.ts


<img width="554" height="311" alt="image" src="https://github.com/user-attachments/assets/4b8365f7-290f-47d4-b2f0-fb8065f737e4" />

Paso 16
Prueba con hardhat 

<img width="554" height="311" alt="image" src="https://github.com/user-attachments/assets/ea92930d-25b3-455a-a250-cda25e8d69b0" />
<img width="554" height="311" alt="image" src="https://github.com/user-attachments/assets/0eb68d15-b192-4905-8868-97cb8c9d1cdb" />
<img width="554" height="311" alt="image" src="https://github.com/user-attachments/assets/7a479d19-7953-4c0e-beec-fe40fa726e7b" />


Paso 17
Prueba sastifatoria 

<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/069548f6-b319-4ddc-b88d-38920d91abc3" />


Paso 18
subiendolo a etherscan sepolia

Subirá el contrato a Sepolia usando tu cuenta de MetaMask (asegúrate de tener al menos 0.1 Sepolia ETH)
Verificará el código automáticamente en Etherscan gracias a tu ETHERSCAN_API_KEY.
Actualizará la dApp para que, al entrar, ya no use la red local sino la red real de Sepolia.
tu clave privada a mano para el primer paso? Recuerda que en MetaMask la obtienes en: Detalles de la cuenta > Mostrar clave privada.

<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/e1a15e22-7ada-4d21-88fc-aa2671d20e8b" />



Paso 19
confirmando la clave para sepolia clave de contraseña de mi metamash y mi apikeys

<img width="377" height="263" alt="image" src="https://github.com/user-attachments/assets/d5c076e6-8dea-43fb-8220-fa5697749241" />
<img width="382" height="248" alt="image" src="https://github.com/user-attachments/assets/8a3f985e-d30c-4451-8ef4-c91536baf896" />


Paso 20 
registralo en la pagina scansepolia

<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/1f32652d-dd1a-404f-9529-f28a718b9452" />


vweificado..

<img width="423" height="303" alt="image" src="https://github.com/user-attachments/assets/2002a25a-8729-4844-8a43-d026a8b5308d" />
<img width="553" height="311" alt="image" src="https://github.com/user-attachments/assets/d199e31b-7c8c-49dd-876d-ffabb2a670e1" />

Pasp 21 cambio a sepolia 
































