import os
import sys
import json
import requests

# Use the values provided by the user
BASE_URL = "https://n8n.astravertex.com"
API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5YzhiM2RhNi1iZWU5LTRkY2MtYjUyZC0xODMxYmVmYTNkNjEiLCJpc3MiOiJuOG4iLCJhdWQiOiJwdWJsaWMtYXBpIiwiaWF0IjoxNzY3NzcwMjEyfQ.jhsNDfmHcTuSmENGMi9q1HR2H-lcIy7XiXAmr5-cMww"

headers = {
    "X-N8N-API-KEY": API_KEY,
    "Content-Type": "application/json"
}

def call_n8n(endpoint, method="GET", data=None):
    url = f"{BASE_URL}/api/v1{endpoint}"
    try:
        resp = requests.request(method, url, headers=headers, json=data)
        resp.raise_for_status()
        return resp.json()
    except Exception as e:
        return {"error": str(e), "details": resp.text if 'resp' in locals() else "No response"}

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python n8n_manager.py <command> [args]")
        sys.exit(1)
        
    cmd = sys.argv[1]
    if cmd == "list":
        result = call_n8n("/workflows")
        print(json.dumps(result, indent=2))
    elif cmd == "get":
        if len(sys.argv) < 3:
            print("Usage: python n8n_manager.py get <id>")
            sys.exit(1)
        result = call_n8n(f"/workflows/{sys.argv[2]}")
        print(json.dumps(result, indent=2))
    else:
        print(f"Unknown command: {cmd}")
