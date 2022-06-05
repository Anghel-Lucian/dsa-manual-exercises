class Graph {
  adjacencyMatrix = [];
  vertexCount = 0;

  addNode() {
    this.vertexCount++;

    this.adjacencyMatrix.forEach((subArray, i) => {
      this.adjacencyMatrix[i] = [...subArray, 0];
    });

    this.adjacencyMatrix[this.vertexCount - 1] = new Array(this.vertexCount).fill(0);
  }

  addEdge(node1, node2) {
    this.adjacencyMatrix[node1 - 1][node2 - 1] = 1;
    this.adjacencyMatrix[node2 - 1][node1 - 1] = 1;
  }

  addDirectedEdge(node1, node2) {
    this.adjacencyMatrix[node1 - 1][node2 - 1] = 1;
  }

  removeEdge(node1, node2) {
    this.adjacencyMatrix[node1 - 1][node2 - 1] = 0;
    this.adjacencyMatrix[node2 - 1][node1 - 1] = 0;
  }

  display() {
    console.log(graph.adjacencyMatrix);
  }
}

const graph = new Graph();

graph.addNode();
graph.addNode();
graph.addNode();
graph.addNode();
graph.addNode();

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.display();