var treegrid = new ej.treegrid.TreeGrid({
  dataSource: [],
  childMapping: 'subtasks',
  height: 350,
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
        treegrid.addRecord({
          taskID: 1,
          taskName: 'New Task',
          startDate: new Date(),
          duration: 4,
          progress: 0,
          priority: 'Normal',
          subtasks: [
            {
              taskID: 2,
              taskName: 'Sub Task 1',
              startDate: new Date(),
              duration: 1,
              progress: 0,
              priority: 'Normal',
            },
            {
              taskID: 3,
              taskName: 'Sub Task 2',
              startDate: new Date(),
              duration: 1,
              progress: 0,
              priority: 'Normal',
            },
            {
              taskID: 4,
              taskName: 'Sub Task 3',
              startDate: new Date(),
              duration: 1,
              progress: 0,
              priority: 'Normal',
            },
            {
              taskID: 5,
              taskName: 'Sub Task 4',
              startDate: new Date(),
              duration: 1,
              progress: 0,
              priority: 'Normal',
            }
          ],
        });
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
