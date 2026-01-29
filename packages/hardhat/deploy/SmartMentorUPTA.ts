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
    // CAMBIO REALIZADO: Se eliminó [deployer] y se dejó [] 
    // porque el nuevo constructor de tu contrato .sol no recibe parámetros.
    args: [], 
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
