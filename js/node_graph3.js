document.addEventListener('DOMContentLoaded', function(){ // on dom ready

var cy3 = cytoscape({
  container: document.querySelector('#cy3'),

  boxSelectionEnabled: false,
  autounselectify: true,

  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'content': 'data(name)',
        'text-valign': 'center',
        'color': 'white',
        'height': 80,
        'width': 80,
        'text-outline-width': 2,
          'background-color': '#999',
        'text-outline-color': '#999'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'line-color': '#ccc',
        'width': 5
      })
    .selector(':selected')
      .css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      })
    .selector('#jp')
     .css({
       'background-image': 'https://ct.yimg.com/cy/3927/25549575789_2d8a0146af_90sq.jpg'
     })
    .selector('#kinny')
     .css({
       'background-image': 'https://ct.yimg.com/cy/3931/22973618098_15876595e6_90sq.jpg'
     })
    .selector('#sirek')
     .css({
       'background-image': 'https://ct.yimg.com/cy/5293/22789832838_52053c5912_90sq.jpg'
     })
    .selector('#andrew')
     .css({
       'background-image': 'css/icon_02_100.png'
     })
    .selector('#jason')
     .css({
       'background-image': 'css/icon_07_100.png'
     })
    .selector('#justin')
     .css({
       'background-image': 'https://ct.yimg.com/cy/766/25519702109_555a0a6540_90sq.jpg'
     })
    .selector('#gid')
     .css({
       'background-image': 'https://ct.yimg.com/cy/2794/23083412177_dc5fcec29b_90sq.jpg'
     })
    .selector('#xi')
     .css({
       'background-image': 'css/icon_08_100.png'
     })
    .selector('#kalvin')
     .css({
       'background-image': 'css/icon_08_100.png'
     })
    .selector('#dillon')
     .css({
       'background-image': 'css/icon_07_100.png'
     })
    .selector('#jenny')
     .css({
       'background-image': 'https://ct.yimg.com/cy/5763/22948884787_8e51a863a2_90sq.jpg'
     })
    .selector('#kevin')
     .css({
       'background-image': 'css/kevo.jpeg'
     })
    .selector('#brian')
     .css({
       'background-image': 'css/icon_10_100.png'
     })
    .selector('#eric')
     .css({
       'background-image': 'https://ct.yimg.com/cy/1647/24678647453_bc7e631354_90sq.jpg'
     })
    .selector('#tim')
     .css({
       'background-image': 'css/tim.png'
     })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),

  elements: {
    nodes: [
      { data: { id: 'jp', name: 'JP (smh.gif)' } },
      { data: { id: 'kinny', name: 'Kinny (LillardTime incoming)' } },
      { data: { id: 'sirek', name: 'Sirek (Error in The Process)' } },
      { data: { id: 'andrew', name: 'Andrew (Andrew\'s Team)' } },
      { data: { id: 'jason', name: 'Jason (Champs)' } },
      { data: { id: 'justin', name: 'Justin (Keak da Greek)' } },
      { data: { id: 'kevin', name: 'Kevin (Chef KEVO)' } },
      { data: { id: 'brian', name: 'Brian (Drays got D)' } },
      { data: { id: 'gid', name: 'Gid (Haren Globetrotters)' } },
      { data: { id: 'xi', name: 'Xi (Hot Grill)' } },
      { data: { id: 'jenny', name: 'Jenny (Jenn-nay)' } },
      { data: { id: 'dillon', name: 'Dillon (Like A Bosh)' } },
      { data: { id: 'eric', name: 'Eric (SuperVillianZ)' } },
      { data: { id: 'kalvin', name: 'Kalvin (The Cleveland Browns)' } },
      { data: { id: 'tim', name: 'Tim (Co-manager Tim)' } }
    ],
    edges: [
     { data: { source: 'kevin', target: 'gid' } },
     { data: { source: 'brian', target: 'justin' } },
     { data: { source: 'andrew', target: 'gid' } },
     { data: { source: 'xi', target: 'jp' } },
     { data: { source: 'eric', target: 'jp' } },
     { data: { source: 'justin', target: 'jp' } },
     { data: { source: 'jp', target: 'xi' } },
     { data: { source: 'eric', target: 'gid' } },
     { data: { source: 'gid', target: 'eric' } },
   ]
  },

  layout: {
    name: 'cose',

  }

});

cy3.on('tap', 'node', function(e){
  var node = e.cyTarget;
  var neighborhood = node.neighborhood().add(node);

  cy3.elements().addClass('faded');
  neighborhood.removeClass('faded');

  //console.log(cy.elements().dc(node).degree)
  //cy.elements().dc({ root: '#sirek' }).degree
  //cy.elements().cc({ root: '#sirek' })
});

cy3.on('tap', function(e){
  if( e.cyTarget === cy3 ){
    cy3.elements().removeClass('faded');
  }
});

}); // on dom ready
