import { PayPalScriptProvider, PayPalButtons, FUNDING } from '@paypal/react-paypal-js'

export const PayPal = ({ className, donation }) => {
  return (
    <PayPalScriptProvider options={{ "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }} >
      <PayPalButtons
        className={className}
        fundingSource={FUNDING.PAYPAL}
        style={{ color: "blue", shape: "pill" }}
        createOrder={(_, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: donation },
            }],
          })
        }}
      />
    </PayPalScriptProvider>
  )
}