var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000,
    app = express(),
    Schema = mongoose.Schema;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/Annota193644');
var AnnotationSchema = new Schema({
        nomCorpus:String,
        texte:[{
            titre:String,
            contenu: String,
            annotation:[{
                type: String,
                couleur: String,
                Arguments:[{
                    nom: String, 
                    description: String 
                }],
                Fonctions:[{
                    nom: String,
                    description:String 
                }]
            }]
        }]
},{ typeKey: '$type' });

var Annotations = mongoose.model('Annotations',AnnotationSchema);

var router = express.Router();
router.route('/')
    .get(function(req,res){
        var Annotations = mongoose.model('Annotations',AnnotationSchema);
        Annotations.find(function(err,Annotas){
            if(err){
                res.send(err);
            }
            res.send(Annotas);
        });
    })
    .post(function(req,res){
        var annota = new Annotations();
        annota.nomCorpus = req.body.nomCorpus;
        annota.save(function(err){
            if(err){
                res.send(err);
            }
            res.send({message:'Annotation cree'})
        });
    
    });

router.route('/:annota_id')
    .get(function(req,res){
         Annotations.findOne({_id:req.params.annota_id},function(err,book){
             if(err){
                 res.send(err);
             }
             res.send(book);
         });
    })
   
    .put(function(req,res){
        Annotations.findOne({_id:req.params.annota_id},function(err,annotas){
        annotas.nomCorpus = req.body.nomCorpus;
        annotas.save(function(err){
                if(err){
                    res.send(err);
                }
                res.send({message:'Annotation modifiée'});
            });
        });
    })
    .delete(function(req,res){
        Annotations.remove({_id:req.params.annota_id},function(err){
            if(err){
                res.send(err);
            }
            res.send({message: 'Annotation supprimée'})
        });
    })
   
app.use('/api',router);

router.route('/texte/:id')
    .get(function(req,res){
        var Annotations = mongoose.model('Annotations',AnnotationSchema);
        Annotations.find(function(err,Annotas){
            if(err){
                res.send(err);
            }
            res.send(Annotas);
        });
    })
    .put(function(req,res){
   
        Annotations.find(function(err,annota){
            for(var i =0 ;i<annota.length;i++){
                if(annota.texte[i]._id === req.params.id){
                    annota.texte[i]= req.body.texte[0];
                   
                }
                
            }
            annota.save(function(err,numRowsAffected,rawRespons){
       
            if(err){
                res.send(err);
            }
            res.send({message:'texte modifie'});
        });
 
})})
    .post(function(req,res){
   
        Annotations.findOne({_id:req.params.id},function(err,annota){
            annota.texte.push(req.body.texte[0]);
            annota.save(function(err,numRowsAffected,rawRespons){
                if(err){
                    res.send(err);
                }
                res.send({message:'texte cree'})
            })
        })
    })
    .delete(function(req,res){
   
        Annotations.findOne({_id:req.params.id},function(err,annota){
            annota.texte.pull(req.body.texte[0]._id);
            annota.save(function(err,numRowsAffected,rawRespons){
                if(err){
                    res.send(err);
                }
                res.send({message:'texte cree'})
            })
        })
    });
    
app.use('/api',router); 


//annotations  
router.route('/annotation/:id')
    .get(function(req,res){
        var Annotations = mongoose.model('Annotations',AnnotationSchema);
        Annotations.find(function(err,Annotas){
            if(err){
                res.send(err);
            }
            var annos=[];
            for(var i =0 ;i<Annotas.length;i++){
                for(var j =0 ;j<Annotas.texte[i].length;j++){
                    if(Annotas.texte[i].annotation[j]._id === req.params.id){
                        annos.push(Annotas.texte[i].annotation[j]);
                    
                    } 
            }
            }
            res.send(Annotas);
        });
    })
    .put(function(req,res){
   
        Annotations.find(function(err,annota){
            for(var i =0 ;i<annota.length;i++){
                if(annota.texte[i]._id === req.params.id){
                    annota.texte[i]= req.body.texte[0];
                   
                }
            }
            annota.save(function(err,numRowsAffected,rawRespons){
       
            if(err){
                res.send(err);
            }
            res.send({message:'texte modifie'});
        });
 
})})
    .post(function(req,res){
   
        
        Annotations.updateOne(
            { 
                "_id": req.params.id,
                "texte.titre" : "titre",
            },
            { 
                "$push": {
                    "texte.$.annotation" : req.body.annotation[0]
                }
            },function(err,numRowsAffected,rawRespons){
       
                if(err){
                    res.send(err);
                }
                res.send({message:'texte modifie'})
            }
        )
    })
    .delete(function(req,res){
   
        Annotations.updateOne(
            { 
                "_id": req.params.id,
                "texte.titre" : "titre",
            },
            { 
                "$pull": {
                    "texte.$.annotation" : req.body.annotation[0]
                               }
            },function(err,numRowsAffected,rawRespons){
       
                if(err){
                    res.send(err);
                }
                res.send({message:'texte supprime'})
            }
        )
    });
    
app.use('/api',router);
//arguments  
router.route('/argument/:id')
    .get(function(req,res){
        var Annotations = mongoose.model('Annotations',AnnotationSchema);
        Annotations.find(function(err,Annotas){
            if(err){
                res.send(err);
            }
            var annos=[];
            for(var i =0 ;i<Annotas.length;i++){
                for(var j =0 ;j<Annotas.texte[i].length;j++){
                    if(Annotas.texte[i].annotation[j]._id === req.params.id){
                        annos.push(Annotas.texte[i].annotation[j]);
                    
                    } 
            }
            }
            res.send(Annotas);
        });
    })
    .put(function(req,res){
   
        Annotations.find(function(err,annota){
            for(var i =0 ;i<annota.length;i++){
                if(annota.texte[i]._id === req.params.id){
                    annota.texte[i]= req.body.texte[0];
                   
                }
            }
            annota.save(function(err,numRowsAffected,rawRespons){
       
            if(err){
                res.send(err);
            }
            res.send({message:'texte modifie'});
        });
 
})})
    .post(function(req,res){
   
        
        Annotations.updateOne(
            { 
                "_id": req.params.id,
                "texte.titre" : "titre",
                "texte.$[].annotation.$.type":"nouveau",
            },
            { 
                "$push": {
                    "texte.$[].annotation.$.Arguments" : req.body.Arguments[0]
                }
            },function(err,numRowsAffected,rawRespons){
       
                if(err){
                    res.send(err);
                }
                res.send({message:'texte modifie'})
            }
        )
    })
    .delete(function(req,res){
   
        Annotations.updateOne(
            { 
                "_id": req.params.id,
                "texte.titre" : "titre",
            },
            { 
                "$pull": {
                    "texte.$.annotation" : req.body.annotation[0]
                               }
            },function(err,numRowsAffected,rawRespons){
       
                if(err){
                    res.send(err);
                }
                res.send({message:'texte supprime'})
            }
        )
    });
    
app.use('/api',router);
    app.listen(port,function(){
        console.log('Listening in port '+ port);
    })