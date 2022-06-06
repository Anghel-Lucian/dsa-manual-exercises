class Graph {
  adjacencyMatrix = [];
  vertexCount = 0;
  parents = [];
  processed = [];

  addNode() {
    this.vertexCount++;

    this.adjacencyMatrix.forEach((subArray, i) => {
      this.adjacencyMatrix[i] = [...subArray, 0];
    });

    this.adjacencyMatrix[this.vertexCount - 1] = new Array(this.vertexCount).fill(0);

    this.processed.push("undiscovered");
    if(this.parents.length <= 1) this.parents.push(-1);
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

  BFS(v) {
    const state = {};
    const queue = [];

    for(let i = 0; i < this.adjacencyMatrix.length; i++) {
      state[i + 1] = "undiscovered";
    }

    queue.push(v);

    while(queue.length >= 1) {
      let u = queue.shift();

      this.adjacencyMatrix[u - 1].forEach((el, i) => {
        if(el === 1 && state[i + 1] === "undiscovered") {
          state[i + 1] = "discovered";
          queue.push(i + 1);
          this.parents[i] = u;
        }
      })

      state[u] = "processed";
      this.processed[u - 1] = "processed";
    }
  }

  findPath(start, end) {
    if(start === end || end === -1) {
      console.log(start);
    } else {
      this.findPath(start - 1, this.parents[end - 1]);
      console.log(end);
    }
  }

  connectedComponents() {
    let connectedComponentsCount = 0;

    for(let i = 1; i <= this.vertexCount; i++) {
      if(this.processed[i] === "undiscovered") {
        this.BFS(i);
        connectedComponentsCount++;
      }
    }

    console.log("Connected components: ", connectedComponentsCount);
  }
}

const graph = new Graph();

graph.addNode();
graph.addNode();
graph.addNode();
graph.addNode();
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

graph.connectedComponents();