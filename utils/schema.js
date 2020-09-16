/* eslint-disable no-unused-vars */
const { celebrate, Joi, errors, Segments } = require("celebrate");
const schemas = {};
schemas.workspaceCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      users: Joi.array().required(),
      tags: Joi.string(),
      type: Joi.string().required()
    })
  })
});
schemas.workspaceUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      file: Joi.string(),
      users: Joi.array().required(),
      tags: Joi.string(),
      type: Joi.string().required()
    })
  })
});

schemas.projectCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      goals: Joi.string().required(),
      project_type: Joi.string().required(),
      operating_units: Joi.string().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
      target_industry: Joi.string().required(),
      target_audience: Joi.string().required(),
      departments_involved: Joi.string().required(),
      subject_areas: Joi.string().required(),
      users: Joi.array().required(),
      tags: Joi.string(),
      workspace_uuid: Joi.string().required()
    })
  })
});
schemas.projectUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      goals: Joi.string(),
      project_type: Joi.string().required(),
      operating_units: Joi.string().required(),
      start_date: Joi.date().required(),
      end_date: Joi.date().required(),
      target_industry: Joi.string().required(),
      target_audience: Joi.string().required(),
      departments_involved: Joi.string().required(),
      subject_areas: Joi.string().required(),
      users: Joi.array().required(),
      tags: Joi.string(),

      workspace_uuid: Joi.string().required()
    })
  })
});
schemas.modelCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    type: Joi.string(),
    users: Joi.array().required(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
schemas.modelUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string(),
    type: Joi.string(),
    users: Joi.array().required(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
schemas.objectCategoryCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    objectcategory_name: Joi.string().required(),
    objectcategory_desc: Joi.string(),
    objectcategory_color: Joi.string(),
    objectcategory_entity: Joi.string()
  })
});
schemas.objectCategoryUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    objectcategory_name: Joi.string().required(),
    objectcategory_desc: Joi.string(),
    objectcategory_color: Joi.string(),
    objectcategory_entity: Joi.string()
  })
});
schemas.objectTypeCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      objecttype_name: Joi.string().required(),
      objecttype_desc: Joi.string(),
      objecttype_category: Joi.string().required()
    })
  })
});
schemas.objectTypeUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    files: Joi.object().keys({
      file: Joi.object()
        .keys({
          name: Joi.any()
        })
        .unknown(true)
    }),
    fields: Joi.object().keys({
      objecttype_name: Joi.string().required(),
      objecttype_desc: Joi.string(),
      objecttype_category: Joi.string().required()
    })
  })
});
schemas.formCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    objecttype_id: Joi.string().required(),
    formdata: Joi.object()
  })
});
schemas.objectDataCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    model_id: Joi.string().required(),
    objecttype_id: Joi.string().required(),
    node_id: Joi.string().required(),
    objectdata: Joi.object().required()
  })
});
schemas.drawsCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    model_id: Joi.string().required(),
    model_type: Joi.string().required(),
    draws: Joi.object().required()
  })
});
schemas.processModelCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    entity_type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    process_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    process_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
schemas.processModelUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    process_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    process_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
/////////////
schemas.dataModelCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    entity_type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    data_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    data_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
schemas.dataModelUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    data_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    data_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});

////
schemas.mindModelCreate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    entity_type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    mind_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    mind_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});
schemas.mindModelUpdate = celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    type: Joi.string().required(),
    level: Joi.string().required(),
    subject_areas: Joi.string().required(),
    mind_modelling: Joi.string().required(),
    department_involved: Joi.string().required(),
    entity_type: Joi.string().required(),
    mind_goals: Joi.array(),
    select_kpis: Joi.array(),
    users: Joi.array(),
    workspaceId: Joi.string().required(),
    projectId: Joi.string().required()
  })
});

module.exports = schemas;
