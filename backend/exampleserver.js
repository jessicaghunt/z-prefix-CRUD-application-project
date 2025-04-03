const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const knex = require('knex')(require('../server/knexfile.js')['development']);

app.use(express.json());
app.use(cors()); // Enable CORS for all origins

app.get('/', (req, res) => {
    res.send('My API is up and running, Yo!');
});

app.get('/users/:id?', function(req, res) {
    const userID = req.params.id;
    knex('users')
        .join('rank', 'users.rank', '=', 'rank.id')
        .join('branch', 'users.service_branch', '=', 'branch.id')
        .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
        .join('unit', 'users.unit', '=', 'unit.id')
        .join('org', 'users.org', '=', 'org.id')
        .select(
            'users.id',
            'users.username',
            'users.age',
            'users.bio',
            'rank.pay_grade as pay_grade',
            'branch.name as branch',
            'duty_status.type as duty_status',
            'unit.name as unit',
            'org.name as org',
            'users.is_public',
            'users.is_admin',
            'users.created_at'
            )
        .modify(usersTable => {
            if (userID) {
                usersTable.where('users.id', '=', userID)
            }
        })
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'The data you are looking for could not be found. Please try again'
            })
    );
});

app.get('/users/:id/all_tests', function(req, res) {
    const userID = req.params.id;
    knex('users')
        .join('rank', 'users.rank', '=', 'rank.id')
        .join('branch', 'users.service_branch', '=', 'branch.id')
        .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
        .join('unit', 'users.unit', '=', 'unit.id')
        .join('org', 'users.org', '=', 'org.id')
        .where('users.id', '=', userID)
        .select(
            'users.id',
            'users.username',
            'users.age',
            'users.bio',
            'rank.pay_grade as pay_grade',
            'branch.name as branch',
            'duty_status.type as duty_status',
            'unit.name as unit',
            'org.name as org',
            'users.is_public',
            'users.is_admin',
            'users.created_at'
            )
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'The data you are looking for could not be found. Please try again'
            })
    );
});

app.get('/army_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`army_test`)
    .join('users', `army_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `army_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/navy_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`navy_test`)
    .join('users', `navy_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `navy_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/usaf_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`usaf_test`)
    .join('users', `usaf_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `usaf_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/marine_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`marine_test`)
    .join('users', `marine_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `marine_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/uscg_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`uscg_test`)
    .join('users', `uscg_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `uscg_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/fantastic_five_test/:event?/:order?', (req, res) => {
    const event = req.params.event || 'final_score';
    const order = req.params.order || 'desc'; //asce or desc
    knex(`fantastic_five_test`)
    .join('users', `fantastic_five_test.user_id`, '=', 'users.id')
    .join('rank', 'users.rank', '=', 'rank.id')
    .join('branch', 'users.service_branch', '=', 'branch.id')
    .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
    .join('unit', 'users.unit', '=', 'unit.id')
    .join('org', 'users.org', '=', 'org.id')
    .select('users.username',
        'rank.pay_grade as pay_grade',
        'branch.name as branch',
        'duty_status.type as duty_status',
        'unit.name as unit',
        'org.name as org',
        `fantastic_five_test.*`
    )
    .orderBy(event, order)
    .then(data => res.status(200).json(data))
    .catch(err =>
        res.status(404).json({
        message:
            'The data you are looking for could not be found. Please try again'
        })
    );
})

app.get('/users/:id/fantastic_five_test', (req, res) => {
    const userID = req.params.id;
    knex(`fantastic_five_test`)
        .join('users', `fantastic_five_test.user_id`, '=', 'users.id')
        .join('rank', 'users.rank', '=', 'rank.id')
        .join('branch', 'users.service_branch', '=', 'branch.id')
        .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
        .join('unit', 'users.unit', '=', 'unit.id')
        .join('org', 'users.org', '=', 'org.id')
        .where('users.id', '=', userID)
        .select('users.username',
            'rank.pay_grade as pay_grade',
            'branch.name as branch',
            'duty_status.type as duty_status',
            'unit.name as unit',
            'org.name as org',
            `fantastic_five_test.*`
        )
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
            message:
                'The data you are looking for could not be found. Please try again'
            })
        );
})

// app.get('/leaderboard/:test_table/:event/:order', (req, res) => {
//     const table = rew.params.test_table;
//     const event = req.params.event;
//     const order = req.params.order; //asce or desc
//     knex(`${table}`)
//     .join('users', `${table}.user_id`, '=', 'users.id')
//     .join('rank', 'users.rank', '=', 'rank.id')
//     .join('branch', 'users.service_branch', '=', 'branch.id')
//     .join('duty_status', 'users.duty_status', '=', 'duty_status.id')
//     .join('unit', 'users.unit', '=', 'unit.id')
//     .join('org', 'users.org', '=', 'org.id')
//     .select('users.username',
//         'rank.pay_grade as pay_grade',
//         'branch.name as branch',
//         'duty_status.type as duty_status',
//         'unit.name as unit',
//         'org.name as org',
//         `${table}.*`
//     )
//     .orderBy(event, order)
//     .then(data => res.status(200).json(data))
//     .catch(err =>
//         res.status(404).json({
//         message:
//             'The data you are looking for could not be found. Please try again'
//         })
//     );
// })

// app.post(`/army_test`, (req, res)=> {
//   const {newTest} = req.body;
//   knex('army_test')
//    .insert(newTest)
//    .returning('*')
//    .then(records => res.status(201).json(records[0]))
//    .catch(err => {
//     res.status(404).json({
//       message: 'Could not post new army test record.'
//     })
//    })
// })

//create users
app.post(`/users`, (req, res) => {
  const {
    username,
    age,
    bio,
    rank,
    service_branch,
    duty_status,
    unit,
    org,
    is_public,
    is_admin
  } = req.body;

  const newUser = {
    username,
    age: age || null,
    bio: bio || null,
    rank,
    service_branch,
    duty_status: duty_status || null,
    unit: unit || null,
    org: org || null,
    is_public: is_public || false,
    is_admin: is_admin || false
  };

  // console.log(newUser);

  knex('users')
   .insert(newUser)
   .returning('*')
   .then(records => {
    const insertedRecord = records[0];
    console.log(insertedRecord);
    res.status(201).json(insertedRecord);
   })
   .catch(err => {
    console.log(err);
    res.status(404).json({
      message: 'Could not post new user record.'
    })
   })

})

//update users
app.patch(`/users/:id`, (req, res) => {
  const userId = req.params.id;
  const updates = req.body;
  const fieldsToUpdate = {};

  if (updates.username !== undefined) fieldsToUpdate.username = updates.username;
  if (updates.age !== undefined) fieldsToUpdate.age = updates.age;
  if (updates.bio !== undefined) fieldsToUpdate.bio = updates.bio;
  if (updates.rank !== undefined) fieldsToUpdate.rank = updates.rank;
  if (updates.service_branch !== undefined) fieldsToUpdate.service_branch = updates.service_branch;
  if (updates.duty_status !== undefined) fieldsToUpdate.duty_status = updates.duty_status;
  if (updates.unit !== undefined) fieldsToUpdate.unit = updates.unit;
  if (updates.org !== undefined) fieldsToUpdate.org = updates.org;
  if (updates.is_public !== undefined) fieldsToUpdate.is_public = updates.is_public;
  if (updates.is_admin !== undefined) fieldsToUpdate.is_admin = updates.is_admin;


  knex('users')
   .where({id: userId})
   .update(fieldsToUpdate)
   .returning('*')
   .then(records => {
    if (records.length === 0) {
      return res.status(404).json({
        message: 'User not found.'
      })
    }
    res.status(200).json(records[0]);
    })
    .catch(err => {
      res.status(404).json({
        message: 'Could not update user record.'
      })
    })

})

//delete users
app.delete(`/users/:id`, (req, res) => {
    const userId = req.params.id;

    knex('users')
      .where({id: userId})
      .delete()
      .returning('*')
      .then(records => {
        if (records.length === 0) {
          res.status(404).json({
            message: 'User not found.'
        })
      }
      res.status(200).json({
        message: 'User deleted successfully.',
        })
      })
    .catch(err => {
        console.log(err);
        res.status(404).json({
          message: 'Could not update user record.'
        })
    })

})

//create fantastic_five_test
app.post(`/fantastic_five_test`, (req, res) => {
    const {
      user_id,
      push_ups,
      plank,
      pull_ups,
      deadlift,
      final_score,
      test_date
    } = req.body;

    const mile = req.body['1_5_mile'];
    const row = req.body['2_km_row'];

    const newTest = {
        user_id,
        push_ups: push_ups || null,
        plank: plank || null,
        '1_5_mile' : mile || null,
        '2_km_row': row || null,
        pull_ups: pull_ups || null,
        deadlift: deadlift || null,
        final_score: final_score || null,
        test_date: test_date || null
    };

    knex('fantastic_five_test')
     .insert(newTest)
     .returning('*')
     .then(records => {
      const insertedRecord = records[0];
      res.status(201).json(insertedRecord);
     })
     .catch(err => {
      res.status(404).json({
        message: 'Could not post new user record.'
      })
     })

  })

  //read ff_test


  //update ff_test
  app.patch(`/fantastic_five_test/:id`, (req, res) => {
    const testId = req.params.id;
    const updates = req.body;
    const fieldsToUpdate = {};

    if (updates.user_id !== undefined) fieldsToUpdate.user_id = updates.user_id;
    if (updates.push_ups !== undefined) fieldsToUpdate.push_ups = updates.push_ups;
    if (updates.plank !== undefined) fieldsToUpdate.plank = updates.plank;
    if (updates['1_5_mile'] !== undefined) fieldsToUpdate['1_5_mile'] = updates['1_5_mile'];
    if (updates['2_km_row'] !== undefined) fieldsToUpdate['2_km_row'] = updates['2_km_row'];
    if (updates.pull_ups !== undefined) fieldsToUpdate.pull_ups = updates.pull_ups;
    if (updates.deadlift !== undefined) fieldsToUpdate.deadlift = updates.deadlift;
    if (updates.final_score !== undefined) fieldsToUpdate.final_score = updates.final_score;
    if (updates.test_date !== undefined) fieldsToUpdate.test_date = updates.test_date;

    knex('fantastic_five_test')
     .where({id: testId})
     .update(fieldsToUpdate)
     .returning('*')
     .then(records => {
      if (records.length === 0) {
        return res.status(404).json({
          message: 'Test not found.'
        })
      }
      res.status(200).json(records[0]);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json({
          message: 'Could not update test record.'
        })
      })

  })

  //delete ff_test
  app.delete(`/fantastic_five_test/:test_id`, (req, res) => {
      const test_id = req.params.test_id;

      knex('fantastic_five_test')
        .where({id: test_id})
        .delete()
        .returning('*')
        .then(records => {
          if (records.length === 0) {
            res.status(404).json({
              message: 'Test not found.'
          })
        }
        res.status(200).json({
          message: 'Test deleted successfully.',
          })
        })
      .catch(err => {
          console.log(err);
          res.status(404).json({
            message: 'Could not update test record.'
          })
      })

  })



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});