# Bluetooth Messenger (P2P File & Text Transfer)

A localized Peer-to-Peer (P2P) messaging application built to establish secure network connections between two physical devices. This app allows real-time text communication and lossless file streaming over a local network using a custom, byte-level application protocol.

---

## 🚀 Features
* **P2P Network Connection:** Direct device-to-device communication without an intermediary server.
* **Real-Time Text Messaging:** Instant text communication utilizing custom framed byte structures.
* **Lossless File Transfer:** Seamless binary data streaming broken into structured packets to ensure zero corruption.
* **Custom Application Protocol:** Lightweight byte-level header validation for precise packet data parsing.

---

## 🛠 Prerequisites

Ensure you have the following installed on both physical devices before running the app:
* **Python 3.10+** (or your specific stack runtime)
* **Git** (for version control and verification)
* Active Wi-Fi connection connecting both devices to the same Local Area Network (LAN).

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
