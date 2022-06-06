class Graph {
  constructor() {
    this.adjacencyLists = {};
    this.nodes = [];
    this.processed = [];
    this.parents = {};
  }

  addNode(node) {
    if(this.nodes.length === 0) {
      this.parents[node] = -1;
    }

    this.processed.push("undiscovered");
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

  BFS(v) {
    // initialize empty state and queue
    // state will keep track of whether the node is undiscovered, discovered or processed
    // queue holds the nodes that were discovered and need processing 
    const state = {};
    const queue = [];

    // initialize each node with a state of undiscovered
    this.nodes.forEach(node => {
      state[node] = "undiscovered";
    })

    // the first node that needs processing is v
    queue.push(v);

    // while there are elements in the queue, we need to process them. In this way, each node in the G will be processed
    while(queue.length >= 1) {
      // take the first node from inside the queue
      const u = queue.shift();

      // optional: process vertex u early

      // we process each node adjacent to u
      this.adjacencyLists[u].forEach(({ node }) => {
        // optional: process edge (u, node)

        // we want to set its state to "discovered" only if the node is first seen now
        if(state[node] === "undiscovered") {
          state[node] = "discovered";

          this.parents[node] = u;

          // next node that will be processed is the first pushed one
          queue.push(node);
        }
      })

      // the u node is now completely processed
      state[u] = "processed";
      this.processed[u - 1] = "processed";

      // optional: process vertex u late
    }
  }

  findPath(x, y) {
    if(x === y || y === -1) {
      console.log(x);
    } else {
      this.findPath(x, this.parents[y]);
      console.log(y);
    }
  }

  connectedComponents() {
    let connectedComponentsCount = 0;

    for(let i = 0; i < this.nodes.length; i++) {
      if(this.processed[i] === "undiscovered") {
        this.BFS(this.nodes[i]);
        connectedComponentsCount++;
      }
    }

    console.log("Connected components: ", connectedComponentsCount);
  }
}

const graph = new Graph();

graph.addNode(1);
graph.addNode(2);
graph.addNode(3);
graph.addNode(4);
graph.addNode(5);
graph.addNode(6);
graph.addNode(7);
graph.addNode(8);
graph.addNode(9);
graph.addNode(10);

graph.addEdge(1, 2);
graph.addEdge(1, 5);
graph.addEdge(2, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);
graph.addEdge(6, 7);
graph.addEdge(7, 8);
graph.addEdge(8, 9);
graph.addEdge(9, 10);
graph.addEdge(10, 6);

graph.display();

// graph.BFS(6);

graph.connectedComponents();