var treegrid = new ej.treegrid.TreeGrid({
  dataSource: [],
  childMapping: 'subtasks',
  height: 250,
  treeColumnIndex: 1,
  toolbar: ['Delete', 'Search'],
  editSettings: { allowAdding: true, allowDeleting: true },
  emptyRecordTemplate: '#emptytemplate',
  columns: [
    {
      field: 'taskID',
      headerText: 'Task ID',
      isPrimaryKey: true,
      width: 70,
      textAlign: 'Right',
    },
    {
      field: 'taskName',
      headerText: 'Task Name',
      width: 200,
      textAlign: 'Left',
    },
    {
      field: 'startDate',
      headerText: 'Start Date',
      width: 90,
      textAlign: 'Right',
      type: 'date',
      format: 'yMd',
    },
    {
      field: 'duration',
      headerText: 'Duration',
      width: 80,
      textAlign: 'Right',
    },
    {
      field: 'progress',
      headerText: 'Progress',
      width: 80,
      textAlign: 'Right',
    },
    { field: 'priority', headerText: 'Priority', width: 90 },
  ],
  dataBound: function () {
    const addBtn = document.getElementById('addRecordBtn');
    if (addBtn && !addBtn.classList.contains('e-btn')) {
      new ej.buttons.Button({ content: 'Add Record', cssClass: 'e-primary' }, addBtn);
      addBtn.onclick = function () {
        treegrid.addRecord(
        {
          taskID: 1,
          taskName: 'Feature Implementation',
          startDate: new Date('2024-03-01'),
          endDate: new Date('2024-04-10'),
          progress: 85,
          duration: 30,
          priority: 'High',
          approved: false,
          subtasks: [
              {
                  taskID: 2,
                  taskName: 'Feature added to wishlist',
                  startDate: new Date('2024-03-01'),
                  endDate: new Date('2024-03-01'),
                  duration: 1,
                  progress: 100,
                  priority: 'Low',
                  approved: true
              },
              {
                  taskID: 3,
                  taskName: 'Initial planning and analysis',
                  startDate: new Date('2024-03-02'),
                  endDate: new Date('2024-03-04'),
                  duration: 3,
                  progress: 100,
                  priority: 'Normal',
                  approved: true
              },
              {
                  taskID: 4,
                  taskName: 'Requirement gathering and documentation',
                  startDate: new Date('2024-03-05'),
                  endDate: new Date('2024-03-08'),
                  duration: 4,
                  progress: 100,
                  priority: 'High',
                  approved: true
              },
              {
                  taskID: 5,
                  taskName: 'UI/UX design and wireframing',
                  startDate: new Date('2024-03-09'),
                  endDate: new Date('2024-03-13'),
                  duration: 5,
                  progress: 100,
                  priority: 'Normal',
                  approved: true
              },
              {
                  taskID: 6,
                  taskName: 'Frontend development',
                  startDate: new Date('2024-03-14'),
                  endDate: new Date('2024-03-22'),
                  duration: 9,
                  progress: 100,
                  priority: 'High',
                  approved: true
              },
              {
                  taskID: 7,
                  taskName: 'Backend API integration',
                  startDate: new Date('2024-03-23'),
                  endDate: new Date('2024-03-28'),
                  duration: 6,
                  progress: 100,
                  priority: 'Critical',
                  approved: true
              },
              {
                  taskID: 8,
                  taskName: 'Internal QA testing',
                  startDate: new Date('2024-03-29'),
                  endDate: new Date('2024-04-01'),
                  duration: 4,
                  progress: 100,
                  priority: 'High',
                  approved: true
              },
              {
                  taskID: 9,
                  taskName: 'Bug fixing and retesting',
                  startDate: new Date('2024-04-02'),
                  endDate: new Date('2024-04-04'),
                  duration: 3,
                  progress: 100,
                  priority: 'Normal',
                  approved: true
              },
              {
                  taskID: 10,
                  taskName: 'Managerial review and approval',
                  startDate: new Date('2024-04-05'),
                  endDate: new Date('2024-04-06'),
                  duration: 2,
                  progress: 50,
                  priority: 'High',
                  approved: false
              },
              {
                  taskID: 11,
                  taskName: 'Deployment to production',
                  startDate: new Date('2024-04-07'),
                  endDate: new Date('2024-04-10'),
                  duration: 4,
                  progress: 0,
                  priority: 'Critical',
                  approved: false
              }
            ]
          }
        );
      };
    }
  },
  actionComplete: onActionComplete,
});
treegrid.appendTo('#TreeGrid');

function onActionComplete(args) {
  if (args.requestType === 'searching' || args.requestType === 'filtering') {
    const addBtn = document.getElementById('addRecordBtn');
    if (addBtn) {
      addBtn.style.display = 'none';
    }
  } else {
    const addBtn = document.getElementById('addRecordBtn');
    if (addBtn) {
      addBtn.style.display = '';
    }
  }
}
