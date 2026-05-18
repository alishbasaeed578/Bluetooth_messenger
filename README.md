Here is the **exact, full text** you need to copy.

Open your `README.md` file, delete everything inside it, paste the text below, and save the file:

```markdown
# Bluetooth Messenger (P2P File & Text Transfer)

A localized Peer-to-Peer (P2P) messaging application built to establish network connections between two physical devices. This app allows real-time text communication and lossless file streaming over a local network using a custom, byte-level application protocol.

---

## 🚀 Features
* **P2P Network Connection:** Direct device-to-device communication without an intermediary server.
* **Real-Time Text Messaging:** Instant text communication utilizing custom framed byte structures.
* **Lossless File Transfer:** Seamless binary data streaming broken into structured packets to ensure zero corruption.
* **Custom Application Protocol:** Lightweight byte-level header validation for precise packet data parsing.

---

## 🛠 Prerequisites

Ensure you have the following installed on both physical devices before running the app:
* **Python 3.10+**
* **Git** * Active Wi-Fi connection connecting both devices to the same Local Area Network (LAN).

---

## ⚙️ How to Run the Application

Follow these steps to connect two physical devices (Device A and Device B):

### 1. Identify Network IPs
Find the local network IP address of your host machine (Device A).
* **macOS/Linux:** Run `ifconfig` in terminal.
* **Windows:** Run `ipconfig` in Command Prompt.
* *(Example IP: `192.168.1.50`)*

### 2. Start the Receiver (Device A)
Launch the application in listener/receiver mode first:
```bash
python app.py --mode server

```

### 3. Connect the Sender (Device B)

Launch the application on the second device, specifying the IP address of Device A to establish the socket connection:

```bash
python app.py --mode client --ip 192.168.1.50

```

Once connected, both terminals/UIs will unlock, enabling active text and file transmission.

---

## 📋 Custom Byte-Level Protocol Specifications

The system utilizes a custom framework layout to read data packets predictably over the TCP socket interface.

Each transmitted segment follows this packet layout:

| Field | Size (Bytes) | Description |
| --- | --- | --- |
| **Type Indicator** | 1 Byte | `0x01` = Text Message <br>

<br> `0x02` = File Metadata <br>

<br> `0x03` = File Binary Chunk |
| **Payload Length** | 4 Bytes | Big-endian unsigned integer (`!I`) indicating payload size. |
| **Payload Data** | Variable | The raw message text or raw binary chunk data. |

### Data Parsing Logic Example:

* **Text Example:** `[0x01] [0x00 0x00 0x00 0x05] [H e l l o]`
* **File Chunk Example:** `[0x03] [0x00 0x00 0x04 0x00] [1024 Bytes of binary data]`

---

## 📁 Repository Structure

```text
Bluetooth_messenger/
├── src/                  # Application source files
│   ├── app.py            # Main application loop
│   └── protocol.py       # Custom byte-framing logic
├── protocol.md           # Deep-dive protocol documentation
└── README.md             # Project roadmap and run instructions

```

```

---

### How to upload this file to your GitHub right now:
Run these commands one by one in your terminal:

```bash
git add README.md
git commit -m "Added complete README documentation"
git push

```
