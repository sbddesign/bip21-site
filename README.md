# bip21-site

## Wallet support

| Wallet        | BIP21 support     | Recognizes Lightning | Description | Issue |
|--------------|-----------|------------|------------|------------|
| Bitcoin Beach | ✔️ | ❌ |   |        
| Blixt | ✔️ | ✔️ | QR code is not a valid bitcoin lightning invoice. |          
| Bluewallet | ✔️ | ✔️ |  Asks to select a wallet, and I can choose my lightning wallet or on-chain wallet. |          
| Breez | ✔️ | ✔️ |  |          
| BitPay | ✔️ | N/A |   |         
| Casa  | ✔️ | N/A |            
| Cash App  | ✔️ | ❌ | Takes user to PIN entry followed by on-chain TX fee selection. |           
| Chaincase | ✔️ | N/A | Pulls in the entire string including the 'bitcoin:', but I think it sees it as an on-chain address. |            
| Coinbase |   |    |  |  
| Electrum |  |  |  |
| Green wallet |  |   |
| Muun | ✔️ | ✔️  |            |  |
| Nunchuk |  |   |  |
| Phoenix | ✔️ | ✔️ |   |
| Samourai | ✔️ | N/A |  |
| Simple Bitcoin Wallet | ✔️ | ✔️ | Needed a channel open to test but seemed to read the invoice. |
| Strike | ✔️ | ❌ | "Amount is too low" I think it is defaulting to on-chain. |           
| Wallet of Satoshi | ✔️ | ✔️  |  |            
| Zap |  |  |   |
| Zebedee | ❌ | ❌ | "This looks like an on-chain QR code..." |            
| Zeus | ✔️ | ❌ |   |  [Link](https://github.com/ZeusLN/zeus/issues/879)          
