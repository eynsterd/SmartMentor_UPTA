import * as chains from "viem/chains";

export type ScaffoldConfig = {
  // Corregido: readonly chains.Chain[] es la forma estándar
  targetNetworks: readonly chains.Chain[];
  pollingInterval: number;
  alchemyApiKey: string;
  rpcOverrides?: Record<number, string>;
  walletConnectProjectId: string;
  onlyLocalBurnerWallet: boolean;
};

export const DEFAULT_ALCHEMY_API_KEY = "cR4WnXePioePZ5fFrnSiR";

const scaffoldConfig = {
  // CONFIGURADO PARA SEPOLIA:
  targetNetworks: [chains.sepolia],

  // Intervalo de actualización de datos
  pollingInterval: 30000,

  // API Key de Alchemy (se lee de las variables de entorno de Vercel)
  alchemyApiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || DEFAULT_ALCHEMY_API_KEY,

  rpcOverrides: {},

  // Tu Project ID de WalletConnect
  walletConnectProjectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "3a8170812b534d0ff9d794f19a901d64",

  // IMPORTANTE: En producción (Vercel) siempre debe ser false
  onlyLocalBurnerWallet: false,
} as const satisfies ScaffoldConfig;

export default scaffoldConfig;

