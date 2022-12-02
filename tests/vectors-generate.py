#!/usr/bin/env python3

ONCHAIN = "bc1qylh3u67j673h6y6alv70m0pl2yz53tzhvxgg7u"
AMOUNT = "0.00001"
LABEL = "BitcoinQR Label"
MESSAGE = "BitcoinQR Message"
LIGHTNING = "lnbc10u1p3pj257pp5yztkwjcz5ftl5laxkav23zmzekaw37zk6kmv80pk4xaev5qhtz7qdpdwd3xger9wd5kwm36yprx7u3qd36kucmgyp282etnv3shjcqzpgxqyz5vqsp5usyc4lk9chsfp53kvcnvq456ganh60d89reykdngsmtj6yw3nhvq9qyyssqjcewm5cjwz4a6rfjx77c490yced6pemk0upkxhy89cmm7sct66k8gneanwykzgdrwrfje69h9u5u0w57rrcsysas7gadwmzxc8c6t0spjazup6"

f = open("vectors.txt", "wt")


def output_data(data):
    if len(data) == 1:
        data = data[0]
    elif len(data) == 2:
        data = data[0] + "?" + data[1]
    else:
        data = "&".join([data[0] + "?" + data[1]] + data[2:])
    f.write(data + "\n")


for prefix in ["bitcoin:", "BITCOIN:"]:
    for onchain in [ONCHAIN, ONCHAIN.upper()]:
        for amount_key in ["", "amount", "AMOUNT"]:
            for label_key in ["", "label", "LABEL"]:
                for message_key in ["", "message", "MESSAGE"]:
                    for lightning_key in ["", "lightning", "LIGHTNING"]:
                        data = [prefix + onchain]
                        if amount_key:
                            data.append(amount_key + "=" + AMOUNT)
                        if label_key:
                            data.append(label_key + "=" + LABEL)
                        if message_key:
                            data.append(message_key + "=" + MESSAGE)
                        if lightning_key:
                            for lightning_val in [LIGHTNING, LIGHTNING.upper()]:
                                r = data.copy()
                                r.append(lightning_key + "=" + lightning_val)
                                output_data(r)
                        else:
                            output_data(data)

f.close()
