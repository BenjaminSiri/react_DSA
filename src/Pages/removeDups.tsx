import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";


interface Node {
    id: string;
    value: string;
    nextId: string | null;
  }

const RemoveDups: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [nodesString, setNodesString] = useState<string>('');

  useEffect(() => {
    printList();
  },[nodes])

  function handleAddNode() {
    setNodes(prev => {
      const newId = crypto.randomUUID();
      const newNode: Node = {
        id: newId,
        value: "0",
        nextId: prev.length > 0 ? prev[0].id : null,
      };
      return [newNode, ...prev];
    });
  }

  function handleEditNode(id: string, value: string) {
    setNodes(prev =>
      prev.map(n => (n.id === id ? { ...n, value } : n))
    );
  }

  function handleEditNext(id: string | null, nextId: string | null){
    setNodes(prev =>
        prev.map(n => (n.id === id ? { ...n, nextId } : n))
    );
  }

  function handleDeleteNode(id: string) {
    setNodes(prev => prev.filter(n => n.id !== id));
  }

  function printList() {
    if (!nodes.length) {
      setNodesString('Empty');
      return;
    }
  
    let out: string = ``;
    const map = new Map(nodes.map(n => [n.id, n]));
  
    let cursor: Node | null = nodes[0];
    while (cursor) {
      out = out + `-> ${cursor.value} `
      cursor = cursor.nextId ? map.get(cursor.nextId)! : null;
    }
    setNodesString(out);
  }

  function handleButtonClick() {
    removeDuplicates(nodes[0])
    printList();
  }

  function removeDuplicates(head:Node){
    if(head === undefined){
        return false;
    }


    let nodeSet: Set<string> = new Set();
    let map = new Map(nodes.map(n => [n.id, n]));

    nodeSet.add(head.value);
    let current:(Node | null) = head;
    let previous:(Node) = current;

    current = current.nextId ? map.get(current.nextId)! : null;

    while(current != undefined){
        if(nodeSet.has(current.value)){
            console.log("Removed!")
            handleEditNext(previous.id, current.nextId);
            handleDeleteNode(current.id);
        } else {
            nodeSet.add(current.value);
            previous = current;
        }
        current = current.nextId ? map.get(current.nextId)! : null;
    }

    return false;
  }

  return (
    <div>
        <a href="/">back</a>
        <h1>Problem 3: removeDups</h1>

        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {nodes.map((node, i) => (
            <React.Fragment key={node.id}>
                <TextField
                    value={node.value}
                    onChange={(e) => handleEditNode(node.id, e.target.value)}
                    size="small"
                />
                {i < nodes.length - 1 && <span>→</span>}
            </React.Fragment>
        ))}
        </div>

        <Button variant="contained" color="primary" onClick={handleAddNode} sx={{ mt: 2 }}>
            Add a Node
        </Button>

        <Button variant="contained" color="primary" onClick={handleButtonClick} sx={{ mt: 2, marginLeft: 2 }}>
            Remove List Duplicates
        </Button>

        <p>{nodesString}</p>
      
    </div>
  );
};

export default RemoveDups;