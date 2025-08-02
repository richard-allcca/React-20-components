import { jsPDF } from "jspdf";
import "jspdf-autotable"; // Asegúrate de instalar jspdf-autotable: npm install jspdf-autotable
import './GeneratePdf.css';

// TODO - npm install jspdf@2.4.0 jspdf-autotable@3.5.25

const GeneratePdf = () => {
  const facturaData = {
    numero: 123456,
    producto: 'Prueba',
    cantidad: 12,
    fecha: '20/07/2025',
    cliente: 'Juan Pérez',
    direccion: 'Calle Falsa 123',
  };

  const generarPdf = () => {
    try {
      const doc = new jsPDF();

      // Encabezado del documento
      doc.setFontSize(18);
      doc.text('Factura', 105, 20, { align: 'center' });

      doc.setFontSize(12);
      doc.text(`Número: ${facturaData.numero}`, 20, 40);
      doc.text(`Fecha: ${facturaData.fecha}`, 20, 50);
      doc.text(`Cliente: ${facturaData.cliente}`, 20, 60);
      doc.text(`Dirección: ${facturaData.direccion}`, 20, 70);

      // Tabla de productos
      const columns = ['Número', 'Producto', 'Cantidad'];
      const data = [
        [facturaData.numero, facturaData.producto, facturaData.cantidad],
        [facturaData.numero, facturaData.producto, facturaData.cantidad], // Ejemplo de múltiples filas
      ];

      doc.autoTable({
        startY: 80,
        head: [columns],
        body: data,
        theme: 'grid',
        styles: { fontSize: 10, halign: 'center' },
        headStyles: { fillColor: [22, 160, 133] }, // Color de encabezado
      });

      // Pie de página
      const pageHeight = doc.internal.pageSize.height;
      doc.setFontSize(10);
      doc.text('Gracias por su compra', 105, pageHeight - 20, { align: 'center' });

      // Guardar el archivo
      doc.save(`Factura_${facturaData.numero}.pdf`);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error al generar el PDF:', error);
      alert('Ocurrió un error al generar el PDF.');
    }
  };

  return (
    <div className="generate-pdf">
      <h1>Factura</h1>
      <div>
        <p>Producto: {facturaData.producto}</p>
        <p>Cantidad: {facturaData.cantidad}</p>
      </div>
      <button onClick={generarPdf}>Generar Pdf</button>
    </div>
  );
};

export default GeneratePdf;