// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SmartMentorUPTA {
    address public admin;
    // FIJAMOS EL COSTO DIRECTAMENTE AQUÍ
    uint256 public costoTrimestre = 0.01 ether; 

    struct Pago {
        bool pagado;
        uint256 monto;
        uint256 fecha;
    }

    mapping(address => mapping(uint256 => mapping(uint8 => Pago))) public registroPagos;

    event PagoRealizado(address indexed estudiante, uint256 anio, uint8 trimestre, uint256 monto);

    constructor() {
        admin = msg.sender;
    }

    function pagarTrimestre(uint256 _anio, uint8 _trimestre) public payable {
        require(_trimestre >= 1 && _trimestre <= 4, "Trimestre invalido");
        require(msg.value >= costoTrimestre, "Monto insuficiente");
        require(!registroPagos[msg.sender][_anio][_trimestre].pagado, "Ya esta pagado");

        registroPagos[msg.sender][_anio][_trimestre] = Pago({
            pagado: true,
            monto: msg.value,
            fecha: block.timestamp
        });

        emit PagoRealizado(msg.sender, _anio, _trimestre, msg.value);
    }
    
    // Función extra por si quieres cambiar el costo en el futuro desde la dApp
    function establecerCosto(uint256 _nuevoCosto) public {
        require(msg.sender == admin, "Solo el admin puede cambiar el costo");
        costoTrimestre = _nuevoCosto;
    }
}
