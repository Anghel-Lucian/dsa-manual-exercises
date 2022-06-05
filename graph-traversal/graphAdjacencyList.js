class Graph {
  constructor() {
    this.adjacencyLists = {};
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
    this.adjacencyLists[node] = [];
  }

  addEdge(node1, node2) {
    this.adjacencyLists[node1].push({ node: node2 });
    this.adjacencyLists[node2].push({ node: node1 });
  }

  addDirectedEdge(node1, node2) {
    this.adjacencyLists[node1].push({ node: node2 });
  }

  removeEdge(node1, node2) {
    this.adjacencyLists[node1] = this.adjacencyLists[node1].filter(({ node }) => node !== node2);
    this.adjacencyLists[node2] = this.adjacencyLists[node2].filter(({ node }) => node !== node1);
  }

  display() {
    let graph = "";

    Object.entries(this.adjacencyLists).forEach(([key, value]) => {
      graph += `${key}: ${value.map(({ node }) => `${node} --> `).join("")}null\n`;
    })

    console.log(graph);
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.display();