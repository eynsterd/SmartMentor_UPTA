"use client";

import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { 
  BanknotesIcon, AcademicCapIcon,
  UsersIcon, PlusCircleIcon
} from "@heroicons/react/24/outline";
import { useAccount } from "wagmi";
import { useScaffoldWriteContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { parseEther } from "viem";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [view, setView] = useState("dataset");
  
  const [estudiantes, setEstudiantes] = useState([
    { id: "1", nombre: "Pedro Alcántara", cedula: "V-15.123.456", wallet: "0x70997970C51812dc3A010C7d01b50e0d17dc79C8", cohorte: "2026-I" },
  ]);

  const [nuevoEstudiante, setNuevoEstudiante] = useState({ nombre: "", cedula: "", wallet: "", cohorte: "2026-I" });

  useEffect(() => { setMounted(true); }, []);

  const { writeContractAsync: pagarTrimestre, isPending } = useScaffoldWriteContract("SmartMentorUPTA");

  const agregarEstudiante = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nuevoEstudiante.nombre || !nuevoEstudiante.cedula) return;
    const id = Math.random().toString(36).substr(2, 9);
    setEstudiantes([...estudiantes, { ...nuevoEstudiante, id }]);
    setNuevoEstudiante({ nombre: "", cedula: "", wallet: "", cohorte: "2026-I" });
    alert("Estudiante registrado en SmartMentor");
  };

  // --- CAMBIO AQUÍ: SE ESTABLECE EL COBRO EN 0.01 ETH ---
  const cobrarEstudiante = async (est: any) => {
    try {
      await pagarTrimestre({
        functionName: "pagarTrimestre",
        args: [BigInt(2026), 1],
        value: parseEther("0.01"), // Esto asegura que MetaMask pida 0.01 ETH
      });
    } catch (e) { 
      console.error("Error al procesar pago:", e); 
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col grow bg-[#fdfafb]">
      <div className="bg-[#800020] text-white py-10 px-10 border-b-4 border-[#002147]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-full"><AcademicCapIcon className="h-12 w-12 text-[#800020]" /></div>
            <div className="text-left">
              <h1 className="text-3xl font-black m-0 uppercase">SmartMentor UPTA</h1>
              <p className="opacity-80 italic m-0">Gestión Contable de Postgrado UPTA-FBF</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full px-5 -mt-6">
        <div className="flex justify-center gap-4 mb-8">
          <button onClick={() => setView("dataset")} className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${view === 'dataset' ? 'bg-[#002147] text-white' : 'bg-white text-[#002147]'}`}>
            <UsersIcon className="h-5 w-5 inline mr-2" /> Listado / Cobro
          </button>
          <button onClick={() => setView("registro")} className={`px-8 py-3 rounded-full font-bold shadow-lg transition-all ${view === 'registro' ? 'bg-[#002147] text-white' : 'bg-white text-[#002147]'}`}>
            <PlusCircleIcon className="h-5 w-5 inline mr-2" /> Registrar Nuevo
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-10 border border-gray-100 min-h-[450px]">
          {view === "dataset" && (
            <div className="animate-in fade-in duration-500">
              <h2 className="text-2xl font-black text-gray-800 text-left mb-6 uppercase tracking-tight">Panel de Estudiantes</h2>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr className="bg-gray-50 text-[#002147]">
                      <th>Cédula / Nombre</th>
                      <th>Billetera (Wallet)</th>
                      <th className="text-center">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {estudiantes.map(est => (
                      <tr key={est.id} className="hover:bg-gray-50 border-b border-gray-100">
                        <td className="text-left">
                          <div className="font-bold text-[#800020]">{est.cedula}</div>
                          <div className="text-sm text-gray-500">{est.nombre}</div>
                        </td>
                        <td className="font-mono text-xs text-gray-400">{est.wallet || "Sin billetera"}</td>
                        <td className="text-center">
                          <button 
                            disabled={isPending}
                            onClick={() => cobrarEstudiante(est)} 
                            className="btn btn-sm bg-[#002147] text-white border-none hover:bg-[#800020]"
                          >
                            <BanknotesIcon className="h-4 w-4 mr-1" /> {isPending ? "Procesando..." : "COBRAR"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {view === "registro" && (
            <div className="animate-in slide-in-from-right duration-500 max-w-2xl mx-auto text-left">
              <h2 className="text-2xl font-black text-[#800020] mb-6 uppercase tracking-tight text-center">Inscripción de Estudiante</h2>
              <form onSubmit={agregarEstudiante} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label font-bold text-xs text-gray-500 uppercase">Nombre Completo</label>
                    <input required type="text" className="input input-bordered border-2 focus:border-[#800020]" value={nuevoEstudiante.nombre} onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, nombre: e.target.value})} placeholder="Ej: Juan Perez" />
                  </div>
                  <div className="form-control">
                    <label className="label font-bold text-xs text-gray-500 uppercase">Cédula de Identidad</label>
                    <input required type="text" className="input input-bordered border-2 focus:border-[#800020]" value={nuevoEstudiante.cedula} onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, cedula: e.target.value})} placeholder="Ej: V-12.345.678" />
                  </div>
                </div>
                <div className="form-control">
                  <label className="label font-bold text-xs text-gray-500 uppercase">Dirección de Billetera (Opcional)</label>
                  <input type="text" className="input input-bordered border-2 focus:border-[#800020]" value={nuevoEstudiante.wallet} onChange={(e) => setNuevoEstudiante({...nuevoEstudiante, wallet: e.target.value})} placeholder="0x..." />
                </div>
                <button type="submit" className="btn bg-[#800020] text-white w-full h-14 mt-4 border-none text-lg font-black shadow-xl">
                  FINALIZAR REGISTRO
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <footer className="mt-auto py-6 bg-[#002147] text-white text-[10px] font-bold tracking-[0.3em] uppercase">
        SmartMentor UPTA - Control Contable Blockchain 2026
      </footer>
    </div>
  );
};

export default Home;
