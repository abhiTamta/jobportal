const items = [
    {
      label: 'Jobs',
      key: 'user/login',
      children: [
        {
          type : "group",
          label : "Popular categories",
          children : [
            {
              label : "IT jobs",
              key : "itjobs"
            },
            {
              label : "Sales jobs",
              key : "salesjobs"
            },
            {
              label : "Marketing jobs",
              key : "marketingjobs"
            },
            {
              label : "Data Science jobs",
              key : "dataSciencejobs"
            },
            {
              label : "HR jobs",
              key : "HRjobs"
            },
            {
              label : "Engineering jobs",
              key : "engineeringjobs"
            }
          ]
        },
        {
          type : "group",
          label : "Jobs in demand",
          children : [
            {
              label : "Fresher jobs",
              key : "fresherjobs"
            },
            {
              label : "MNC jobs",
              key : "MNCjobs"
            },
            {
              label : "Remote jobs",
              key : "remotejobs"
            },
            {
              label : "Work from home jobs",
              key : "workfromhomejobs"
            },
            {
              label : "Walk-in jobs",
              key : "Walkinjobs"
            },
            {
              label : "Part-time jobs",
              key : "parttimejobs"
            }
          ]
        },
      ]
    },
    {
      label: 'Companies',
      key: 'companies',
      children: [
        {
          label: 'Option 1',
          key: 'setting:1',
        },
        {
          label: 'Option 2',
          key: 'setting:2',
        },
      ],
    },
    {
      label: 'Services',
      key: 'services',
      children: [
        {
          label: 'Option 1',
          key: 'setting:3',
        },
        {
          label: 'Option 2',
          key: 'setting:4',
        },
      ],
    },
  ];

  export default items