var treegrid = new ej.treegrid.TreeGrid({
  dataSource: [],
  childMapping: 'subtasks',
  height: 250,
  treeColumnIndex: 1,
  toolbar: ['Delete', 'Search'],
  editSettings: { allowAdding: true, allowDeleting: true },
  allowFiltering: true,
  filterSettings: { type: 'Menu' },
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
            "taskID": 1,
            "taskName": "Project Lifecycle",
            "startDate": "2023-11-01",
            "endDate": "2023-11-30",
            "progress": 20,
            "duration": 30,
            "priority": "High",
            "approved": false,
            "subtasks": [
              {
                "taskID": 2,
                "taskName": "Define Scope",
                "startDate": "2023-11-01",
                "endDate": "2023-11-03",
                "duration": 3,
                "progress": 100,
                "priority": "High",
                "approved": true
              },
              {
                "taskID": 3,
                "taskName": "Draft Plan",
                "startDate": "2023-11-04",
                "endDate": "2023-11-06",
                "duration": 3,
                "progress": 60,
                "priority": "High",
                "approved": false
              },
              {
                "taskID": 4,
                "taskName": "Build Feature",
                "startDate": "2023-11-07",
                "endDate": "2023-11-15",
                "duration": 9,
                "progress": 40,
                "priority": "Critical",
                "approved": false
              },
              {
                "taskID": 5,
                "taskName": "QA Testing",
                "startDate": "2023-11-16",
                "endDate": "2023-11-20",
                "duration": 5,
                "progress": 0,
                "priority": "Normal",
                "approved": false
              },
              {
                "taskID": 6,
                "taskName": "Deploy System",
                "startDate": "2023-11-21",
                "endDate": "2023-11-25",
                "duration": 5,
                "progress": 0,
                "priority": "High",
                "approved": false
              },
              {
                "taskID": 7,
                "taskName": "Feedback Review",
                "startDate": "2023-11-26",
                "endDate": "2023-11-30",
                "duration": 5,
                "progress": 0,
                "priority": "Normal",
                "approved": false
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
