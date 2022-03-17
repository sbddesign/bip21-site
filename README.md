# BIP21 Microsite

This is a WIP microsite to promote the usage of a BIP21 payment URI QR code that can include lightning invoices or offers.

## Wallet support

See the [Support table](https://bitcoinqr.dev/#support) on this website. If you'd like to update the data in this table, you can edit the [`wallet.json`](https://github.com/sbddesign/bip21-site/blob/main/wallet_support.json) file in a PR or [submit an issue](https://github.com/sbddesign/bip21-site/issues/new).

## Getting Started

To run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To build a static site for deployment:

```bash
npm run build
```

Then deploy the `out` directory.
