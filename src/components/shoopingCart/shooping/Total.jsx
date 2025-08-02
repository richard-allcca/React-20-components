
const Total = ({ data }) => {
  let amountDefault = 0;
  data.map((item) => amountDefault += item.price * item.quantity);

  return (
    <div className='total' >El Monto Total de su compra es: $ { amountDefault }.00</div>
  );
};

export default Total;