var app = angular.module('App', ['checklist-model']);

app.value('$anchorScroll', angular.noop);

app.controller('RBCController', function(report, $scope) {
    $scope.a = this;
    this.num = 2;
    this.num_text = '';
    this.color = 2;
    this.color_text = '';
    this.size = 2;
    this.size_text = '';
    this.aniso = 5;
    this.aniso_text = '';
    this.poik = 5;
    this.poik_text = '';
    this.poly = 1;
    this.poly_text = '';
    this.schist = 1;
    this.schist_text = '';
    this.notAbn = false;
    this.sphere = 1;
    this.sphere_text = '';
    this.tear = 1;
    this.tear_text = '';
    this.ellip = 1;
    this.ellip_text = '';
    this.nrbc = 1;
    this.nrbc_text = '';
    $scope.comments = [];
    this.RBC_text = [];

    
    this.select = function(tab, index) {
      if (tab === 'num') {this.num = index;}
      if (tab === 'color') {this.color = index;}
      if (tab === 'size') {this.size = index;}
      if (tab === 'aniso') {this.aniso = index;}
      if (tab === 'poik') {this.poik = index;}
      if (tab === 'poly') {this.poly = index;}
      if (tab === 'schist') {this.schist = index;}
      if (tab === 'sphere') {this.sphere = index;}
      if (tab === 'tear') {this.tear = index;}
      if (tab === 'ellip') {this.ellip = index;}
      if (tab === 'nrbc') {this.nrbc = index;}
      if (tab === 'notAbn') {this.notAbn = !this.notAbn;}
      report('RBC',this.getDescription());
    };
    
    this.isSelected = function(tab, index) {
      if (tab === 'num') {return this.num === index;}
      if (tab === 'color') {return this.color === index;}
      if (tab === 'size') {return this.size === index;}
      if (tab === 'aniso') {return this.aniso === index;}
      if (tab === 'poik') {return this.poik === index;}
      if (tab === 'poly') {return this.poly === index;}
      if (tab === 'schist') {return this.schist === index;}
      if (tab === 'sphere') {return this.sphere === index;}
      if (tab === 'tear') {return this.tear === index;}
      if (tab === 'ellip') {return this.ellip === index;}
      if (tab === 'nrbc') {return this.nrbc ===index;}
      if (tab === 'notAbn') {return this.notAbn;}
    };
    
    $scope.remove = function(index) {
      $scope.comments.splice(index,1);
      report('RBC',$scope.a.getDescription());
    }
    
    $scope.addComment = function() {
      $scope.comments.push($scope.RBCcomment);
      $scope.RBCcomment = '';
      report('RBC',$scope.a.getDescription());
    };
    
    this.getDescription = function() {
      var RBC_text = [];
      
      this.num_text = "";
      if (this.num === 1) {this.num_text += 'Decreased';}
        else if (this.num ===2) {this.num_text += 'Normal';}
        else if (this.num ===3) {this.num_text += 'Increased';}
      this.num_text += ' in number, ';
        
      if (this.color === 1) {this.color_text = 'hypochromic, ';}
        else if (this.color ===2) {this.color_text = 'normochromic, ';}
        
      if (this.size === 1) {this.size_text = 'and microcytic';}
        else if (this.size ===2) {this.size_text = 'and normocytic';}
        else if (this.size ===3) {this.size_text = 'and macrocytic';}
      RBC_text.push(this.num_text + this.color_text + this.size_text);
        
      if (this.aniso === 1) {this.aniso_text = 'Anisocytosis: not present';}
        else if (this.aniso === 2) {this.aniso_text = 'Anisocytosis: mild';}
        else if (this.aniso === 3) {this.aniso_text = 'Anisocytosis: moderate';}
        else if (this.aniso === 4) {this.aniso_text = 'Anisocytosis: marked';}
        else if (this.aniso === 5) {this.aniso_text = '';}
        
      if (this.aniso === this.poik) {
          this.aniso_text = this.aniso_text.replace('Anisocytosis:', 'Anisocytosis and poikilocytosis: ');
          this.poik_text = '';
          }
        else if (this.poik === 1) {this.poik_text = ' Poikilocytosis: not present';}
        else if (this.poik === 2) {this.poik_text = ' Poikilocytosis: mild';}
        else if (this.poik === 3) {this.poik_text = ' Poikilocytosis: moderate';}
        else if (this.poik === 4) {this.poik_text = ' Poikilocytosis: marked';}
        else if (this.poik === 5) {this.poik_text = '';}
      if (this.aniso_text) {RBC_text.push(this.aniso_text);}
      if (this.poik_text) {RBC_text.push(this.poik_text);}
      
        
      if (this.poly === 1) {this.poly_text = '';}
        else if (this.poly ===2) {this.poly_text = ' Polychromasia: not increased';}
        else if (this.poly ===3) {this.poly_text = ' Polychromasia: increased with circulating nucleated red blood cells';}
        else if (this.poly ===4) {this.poly_text = ' Polychromasia: increased without circulating nucleated red blood cells';}
      if (this.poly_text) {RBC_text.push(this.poly_text);}
      
      if (this.schist === 1) {this.schist_text = '';}
        else if (this.schist === 2) {this.schist_text = 'Schistocytes: not increased';}
        else if (this.schist === 3) {this.schist_text = 'Schistocytes: rare';}
        else if (this.schist === 4) {this.schist_text = 'Schistocytes: mildly increased, 1+ (0-2/hpf)';}
        else if (this.schist === 5) {this.schist_text = 'Schistocytes: moderately increased, 2+ (2-5/hpf)';}
        else if (this.schist === 6) {this.schist_text = 'Schistocytes: markedly increased, 3+ (more than 5/hpf)';}
      if(this.schist_text) {RBC_text.push(this.schist_text);}
      
      if (this.sphere === 1) {this.sphere_text = '';}
        else if (this.sphere === 2) {this.sphere_text = 'Spherocytes: not increased';}
        else if (this.sphere === 3) {this.sphere_text = 'Spherocytes: mildly increased';}
        else if (this.sphere === 4) {this.sphere_text = 'Spherocytes: moderately increased';}
        else if (this.sphere === 5) {this.sphere_text = 'Spherocytes: markedly increased';}
      
      
      if (this.tear === this.sphere) {
        this.sphere_text = this.sphere_text.replace('Spherocytes', 'Spherocytes and Dacrocytes (Teardrop cells)');
        this.tear_text = '';
      }
        else if (this.tear === 1) {this.tear_text = '';}
        else if (this.tear === 2) {this.tear_text = 'Dacrocytes (Teardrop cells): not increased';}
        else if (this.tear === 3) {this.tear_text = 'Dacrocytes (Teardrop cells): mildly increased';}
        else if (this.tear === 4) {this.tear_text = 'Dacrocytes (Teardrop cells): moderately increased';}
        else if (this.tear === 5) {this.tear_text = 'Dacrocytes (Teardrop cells): markedly increased';}
      
      if(this.ellip === this.sphere && this.ellip === this.tear) {
        this.sphere_text = this.sphere_text.replace('Spherocytes', 'Spherocytes, Elliptocytes,');
        this.ellip_text = '';
      }
        else if (this.ellip === this.sphere) {
          this.sphere_text = this.sphere_text.replace('Spherocytes', 'Spherocytes and Elliptocytes');
          this.ellip_text = '';
        }
        else if (this.ellip === this.tear) {
          this.tear_text = this.tear_text.replace('cells)', 'cells) and Elliptocytes');
          this.ellip_text = '';
        }
        else if (this.ellip === 1) {this.ellip_text = '';}
        else if (this.ellip === 2) {this.ellip_text = 'Elliptocytes: not increased';}
        else if (this.ellip === 3) {this.ellip_text = 'Elliptocytes: mildly increased';}
        else if (this.ellip === 4) {this.ellip_text = 'Elliptocytes: moderately increased';}
        else if (this.ellip === 5) {this.ellip_text = 'Elliptocytes: markedly increased';}
        
      if(this.nrbc === 1) {this.nrbc_text = '';}
      else if(this.nrbc === 2) {this.nrbc_text = 'Nucleated red blood cells: not increased';}
      else if(this.nrbc === 3) {this.nrbc_text = 'Nucleated red blood cells: mildly increased';}
      else if(this.nrbc === 4) {this.nrbc_text = 'Nucleated red blood cells: moderately increased';}
      else if(this.nrbc === 5) {this.nrbc_text = 'Nucleated red blood cells: markedly increased';}
      
      
      if(this.sphere_text) {RBC_text.push(this.sphere_text);}
      if(this.tear_text) {RBC_text.push(this.tear_text);}
      if(this.ellip_text) {RBC_text.push(this.ellip_text);}
      if(this.nrbc_text) {RBC_text.push(this.nrbc_text);}
      
      if(this.notAbn) {RBC_text.push('No significant morphologic abnormalities');}
      
      $scope.comments.forEach(function(text) {
        RBC_text.push(text);
      });
      
      return RBC_text;
    };
    report('RBC',this.getDescription());
});

app.controller('WBCController', function(report, $scope) {
  $scope.a = this;
  this.num = 2;
  this.num_text = '';
  this.morph = 1;
  this.morph_text = '';
  this.blasts = false;
  this.dysp = false;
  this.immature = false;
  this.atyp = false;
  this.reactive = false;
  $scope.comments = [];
  
  
  $scope.remove = function(index) {
      $scope.comments.splice(index,1);
      report('WBC',$scope.a.getDescription());
    }
  
  $scope.addComment = function() {
      $scope.comments.push($scope.WBCcomment);
      $scope.WBCcomment = '';
      report('WBC',$scope.a.getDescription());
    };
  
  
  this.select = function(tab, index) {
    if (tab === 'num') {this.num = index;}
    if (tab === 'morph') {this.morph = index;}
    if (tab === 'blasts') {
      this.blasts = !this.blasts;
      if (!this.blasts) {this.numOfBlasts = '';}
    }
    if (tab === 'dysp') {this.dysp = !this.dysp;}
    if (tab === 'immature') {this.immature = !this.immature;}
    if (tab === 'atyp') {this.atyp = !this.atyp;}
    if (tab === 'reactive') {this.reactive = !this.reactive;}
    report('WBC',this.getDescription());
  };
  
  this.isSelected = function(tab, index) {
    if (tab === 'num') {return this.num === index;}
    if (tab === 'morph') {return this.morph === index;}
  };
  
  this.getDescription = function() {
    var WBCtext = [];
    
    var num_text = '';
    if(this.num === 1) {num_text = 'Decreased';}
    if(this.num === 2) {num_text = 'Normal';}
    if(this.num === 3) {num_text = 'Increased';}
    WBCtext.push( num_text + " in number")
    
    var morph_text = '';
    var dysp_text = '';
    if(this.morph === 1) {
      morph_text = 'normal';
      dysp_text = 'No circulating blasts, atypical lymphoid cells, or dysplastic changes are identified. '; 
      WBCtext.push(dysp_text);
    }
    if(this.morph === 2) {
      morph_text = 'abnormal';
      var list = [];
      if (this.blasts) {
        if(typeof this.numOfBlasts === "undefined") {WBCtext.push("Blasts: present");}
        else {WBCtext.push("Blasts: present (Approximately " + this.numOfBlasts + "% of leukocytes)");}
      }
      if(this.dysp) {list.push('dysplatic granulocytes');WBCtext.push("Dysplastic granulocytes: present");}
      if(this.immature) {list.push('immature granulocytes');WBCtext.push("Immature granulocytes: present");}
      if(this.atyp) {list.push('atypical lymphocytes');WBCtext.push("Atypical lymphocytes: present");}
      if(this.reactive) {list.push('reactive lymphcytes');WBCtext.push("Reactive lymphocytes: present");}
      list.forEach(function(current, index, array) {
        if (array.length > 1 && index === (array.length - 1)) {dysp_text += "and ";}
        dysp_text += current;
        if (array.length > 2 && index < (array.length - 1)) {dysp_text += ",";}
        dysp_text += " ";
        if (index === 0) {dysp_text = dysp_text.charAt(0).toUpperCase() + dysp_text.slice(1);}
      });
      dysp_text += 'are obseved. '
      if(!(typeof this.numOfBlasts === "undefined")) {dysp_text += 'Blasts account for approximately ' + this.numOfBlasts + '% of leukocytes. '}
    }
    
    $scope.comments.forEach(function(text) {
        WBCtext.push(text);
      });
    
    return WBCtext;
    
  };
  report('WBC',this.getDescription());
});

app.controller('PlateletController', function(report, $scope) {
  
  $scope.a = this;
  this.num = 2;
  this.morph = 1;
  this.clumps = 1;
  $scope.norm = true;
  $scope.large = false;
  $scope.giant = false;
  $scope.hypo - false;
  $scope.comments = [];
  
  $scope.remove = function(index) {
      $scope.comments.splice(index,1);
      report('Plt',$scope.a.getDescription());
    }
  
  $scope.addComment = function() {
      $scope.comments.push($scope.PLTcomment);
      $scope.PLTcomment = '';
      report('Plt',$scope.a.getDescription());
    };
  
  this.select = function(name, index) {
    if(name === 'num') {this.num = index;}
    if(name === 'morph') {this.morph = index;}
    if(name === 'clumps') {this.clumps = index;}
    if(name === 'norm') {$scope.norm = !$scope.norm;}
    if(name === 'large') {$scope.large = !$scope.large;}
    if(name === 'giant') {$scope.giant = !$scope.giant;}
    if(name === 'hypo') {$scope.hypo = !$scope.hypo;}
    report('Plt',this.getDescription());
  };
  
  this.isSelected = function (name, index) {
    if(name === 'num') {return this.num === index;}
    if(name === 'morph') {return this.morph === index;}
    if(name === 'clumps') {return this.clumps === index;}
  };
  
  this.getDescription = function() {
    var PltText = [];
    var num_string = '';
    if(this.num === 1) {num_string = 'Decreased';}
    if(this.num === 2) {num_string = 'Normal';}
    if(this.num === 3) {num_string = 'Increased';}
    
    var morph_string = '';
    if($scope.norm) {morph_string = 'normal';}
    if($scope.norm && ($scope.large || $scope.giant || $scope.hypo)) {morph_string += ", ";}
    if($scope.large && !$scope.giant && !$scope.hypo) {morph_string += "large";}
    if(!$scope.large && $scope.giant && !$scope.hypo) {morph_string += "giant";}
    if(!$scope.large && !$scope.giant && $scope.hypo) {morph_string += "hypogranular";}
    if($scope.large && $scope.giant && !$scope.hypo) {morph_string += "large and giant";}
    if($scope.large && !$scope.giant && $scope.hypo) {morph_string += "large and hypogranular";}
    if(!$scope.large && $scope.giant && $scope.hypo) {morph_string += "giant and hypogranular";}
    if($scope.large && $scope.giant && $scope.hypo) {morph_string += "large, giant, and hypogranular";}
    
    if($scope.large || $scope.giant || $scope.hypo) {morph_string += ' platelets are present';}
    
    
    var clumps_string = '';
    if(this.clumps === 1) { clumps_string = 'not present';}
    if(this.clumps === 2) { clumps_string = 'rare';}
    if(this.clumps === 3) { clumps_string = 'significantly increased, may affect platelet count';}
    
    PltText.push( num_string + ' in number');
    if(morph_string) {PltText.push('Morphology: ' + morph_string);}
    PltText.push("Platelet clumps: " + clumps_string);
    
    $scope.comments.forEach(function(text) {
        PltText.push(text);
      });
    
    return PltText;
    
  };
  report('Plt',this.getDescription());
});

app.controller('ImpressionController', function($scope, report) {
  $scope.impressions = [];
  $scope.temp = this;

  $scope.remove = function (index) {
    $scope.impressions.splice(index,1);
    report('Imp', $scope.temp.getDescription());
  };
  
  $scope.addDiagnosis = function (text) {
    $scope.DiagnosisText = text;
  };
  $scope.addToImpression = function(text) {
    $scope.impressions.push(text);
    report('Imp', $scope.temp.getDescription());
  };
  
  this.getDescription = function() {
    var impression_text = [];
    $scope.impressions.forEach(function(diagnosis) {
      impression_text.push(diagnosis);
    });
    return impression_text;
  };
  
});

app.controller('CommentController', function($scope, report, $location, $anchorScroll) {
  $scope.comments = '';
  $scope.XComments1 = '';
  $scope.XComments2 = '';
  
  $scope.scroll = function() {
    $location.hash('CommentPanel');
    $anchorScroll();
  };

  
  $scope.buildComments = function() {
    var temp = "";
    if ($scope.NormoChromicAnemia) {temp += 'Causes of normocytic anemia include bleeding, hemolysis, anemia of chronic disease, early iron deficiency, anemia of renal disease, hypothyroidism, and combined nutritional deficiency (iron and folate or cobalamin). Bleeding should be ruled out clinically. The smear does not suggest a microangiopathic or other hemolytic anemia. ';}
    if ($scope.Schists) {temp += 'Schistocytes may be seen in sepsis, DIC, some drug toxicities, small vessel disease of the kidney, malignant hypertension, cardiac valve defects, pre-ecclampsia/ecclampsia, HELLP syndrome, and TTP / HUS. ';}
    if ($scope.Spherocytes) {temp += 'Increased schistocytes suggestive of hemolysis. Recommend following haptoglobin and LDH to monitor any hemolysis. Also recommend ordering a direct antiglobulin test (DAT) to evaluate for immune-mediated hemolysis. ';}
    if ($scope.MicrocyticAnemia) {temp += 'Causes of microcytic anemia include iron deficiency, anemia of chronic disease, thalassemia / thalassemia trait, and sideroblastic anemia. ';}
    if ($scope.MacrocyticAnemia) {temp += 'Causes of macrocytic anemia include B12 deficiency, folate deficiency, alcoholism, liver disease, hypothyroidism, myelodysplasia, and hemolytic anemia. The smear does not suggest a microangiopathic or other hemolytic anemia.';}
    if ($scope.Leukopenia) {temp += 'Causes of leukopenia include infection, drugs, and immune disorders; also, persons of African descent may have relatively low white blood cell counts. ';}
    if ($scope.Neutrophilia) {temp += 'Causes of neutrophilia include infection, medications, stress, hemorrhage, rheumatologic disorders, cigarette smoking, tissue necrosis, and chronic myeloproliferative disorders. [also: pregnancy] ';}
    if ($scope.lympocytosis) {temp += "Causes of lymphocytosis include viral infections such as viral hepatitis, other infections, drugs, hypersensitivity reactions, endocrine disease, and leukemia. ";}
    if ($scope.lymphopenia) {temp += "Causes of lymphocytopenia include acute stress (including burns, trauma, fulminant hepatic failure),  hypersplenism, acute and chronic renal failure (including patients on dialysis), alcohol, drug effect, GVHD, radiation, iron deficiency, thymoma, and infections, including HIV. ";} 
    if ($scope.BlastComment) {temp += 'Recommend bone marrow biopsy/aspiration with flow cytometry, cytogenetics, and molecular studies to further characterize this acute leukemia. ';}
    if ($scope.thrombocytopenia) {temp += "Causes of thrombocytopenia include infection, hypersplenism, ITP, drugs, inherited syndromes, inflammatory disorders, lymphoproliferative disorders, megaloblastic anemia, marrow replacement, malignancy, iron deficiency, autoimmune diseases, DIC, and TTP-HUS. The smear does not suggest a microangiopathic anemia such as TTP-HUS. ";}
    if ($scope.thrombocytopeniaNeo) {temp += 'Causes of thrombocytopenia in neonates include maternal antiplatelet antibodies, intrauterine infection, IUGR due to placental insufficiency, hyperbilirubinemia with phototherapy, and DIC. ';}
    if ($scope.TTP) {temp += 'The increased schistocytes and decreased platelets suggest a microangiopathic anemia. Causes of microangiopathic anemia include TTP-HUS, DIC, sepsis, cardiac valve disease, and malignant hypertension. Recommend ordering a DIC panel and following haptoglobin and LDH to monitor any hemolysis. [also: preclampsia/eclampsia] ';}
    if ($scope.ThromboReactive) {temp += 'Causes of thrombocytosis include infection, inflammatory disorders, hyposplenism, malignancy, and iron deficiency. ';}
    if ($scope.pancytopenia) {temp += 'The cause of the pancytopenia is not apparent from this smear. Causes of pancytopenia include aplastic anemia, bone marrow infiltration, hypersplenism, megaloblastic anemia, autoimmune diseases, myelodysplasia, and overwhelming infection. Examination of the bone marrow should be considered if the cause of the pancytopenia cannot be determined otherwise. ';}
    if ($scope.pancytopeniaBMT) {temp += 'Potential contributing causes may include infection or medication effect.  Other causes of pancytopenia include aplastic anemia, bone marrow infiltration, hypersplenism, autoimmune diseases, and myelodysplasia.  Examination of the bone marrow may be considered if the cause of the pancytopenia cannot be determined otherwise. ';}
    if ($scope.LGL) {temp += 'Large granular lymphocytes may be increased in chronic viral infections (especially EBV and CMV), in autoimmune disease, after splenectomy, and in patients with underlying malignancies, as well as in lymphoproliferative disorders of large granular lymphocytes.  Monitoring for persistence is recommended.  If there is concern for a lymphoproliferative disorder of large granular lymphocytes, flow cytometry may be performed on peripheral blood. ';}
    if ($scope.Haptoglobin) {temp += 'Haptoglobin is an acute phase reactant and thus may be increased settings such as infection, trauma, collagen diseases and leukemias/lyphomas, among others. Haptoglobin increase has also been associated with conditions such as obstruction/biliary disease, steriod use, aplastic anemia, diabetes, smoking, nephrotic syndrome, and increased estrogen levels. ';}
    $scope.comments = temp;
    report('Comment', ($scope.XComments1 + " " + temp + " " + $scope.XComments2).trim());
  };
  
  $scope.$watch('XComments1', function() {
    if($scope.XComments1 || $scope.XComments2) {
      report('Comment', ($scope.XComments1 + " " + $scope.comments + " " + $scope.XComments2).trim());
    }
    else report('Comment', $scope.comments);
  });
  
  $scope.$watch('XComments2', function() {
    if($scope.XComments2 || $scope.XComments2) {
      report('Comment', ($scope.XComments1 + " " + $scope.comments + " " + $scope.XComments2).trim());
    }
    else report('Comment', $scope.comments);
  });

});


app.controller('SignatureController', function($scope, report) { 
  
  $scope.Name = '[Insert Name]';
  $scope.ICD9s = [];

 $scope.getSignature = function () {
    var signature = [];
    if ($scope.resident) {
      signature.push('');
      signature.push('');
      signature.push('');
      signature.push('___________________');
      signature.push( $scope.resName + ', Pathology Resident');
    }
    signature.push('');
    signature.push('');
    signature.push('');
    signature.push('___________________');
    signature.push( $scope.Name + ', Pathologist');
    signature.push('I have reviewed this slide and composed this report.')
    var date = new Date();
    signature.push((date.getMonth() + 1 ) + '/' + date.getDate() + '/' + date.getFullYear());
    signature.push('ICD-9: ' + $scope.ICD9s.join(', '));
    return signature;
 };
 
 $scope.UpdateSignature = function() {
   report('Sig', $scope.getSignature());
 };
 
  report('Sig', $scope.getSignature());

  
});

app.controller('Reporter', function(report,$rootScope, $scope) {
  $scope.report = '';
  $rootScope.$watch('report', function(newVal, oldVal, scope) {
    $scope.report = newVal;
  });
  
  $scope.select = function($event) {
   $("#reportArea").select();
  };
});


app.factory('report', function($rootScope) {
  var RBCtext = [];
  var WBCtext = [];
  var PltText = [];
  var ImpText = [];
  var report = [];
  var comment = '';
  var Sig = [];

  var addtext = function(text, offset) {
    if (text.length + offset.length > 60) {
      var textArray = text.split(" ");
      var newLine = offset;
      while (textArray.length > 0) {
        if((newLine + textArray[0]).length < 60) {
          newLine += textArray.shift() + " ";
          if (textArray.length === 0)
            {report.push(newLine);}
        }
        else {
          report.push(newLine);
          if(offset) {newLine = offset + " ";}
          else {newLine = offset;}
          
        }
      }
    }
    else {report.push(offset + text);}
  };
  
  return function(action, data) {
    if(action === 'RBC') {RBCtext = data;}
    else if(action === 'WBC') {WBCtext = data;}
    else if(action === 'Plt') {PltText = data;}
    else if(action === 'Imp') {ImpText = data;}
    else if(action === 'Comment') {comment = data;}
    else if(action === 'Sig') {Sig = data;}
    report = [];
    addtext('MORPHOLOGY:','');
    addtext("Red Blood Cells:",'\u00A0\u00A0');
    RBCtext.forEach(function(text) {
      addtext("*" + text,'\u00A0\u00A0\u00A0\u00A0');
    });
    addtext("White Blood Cells:",'\u00A0\u00A0');
    WBCtext.forEach(function(text) {
      addtext("*" + text,'\u00A0\u00A0\u00A0\u00A0');
    });
    addtext("Platelets:",'\u00A0\u00A0');
    PltText.forEach(function(text) {
      addtext("*" + text,'\u00A0\u00A0\u00A0\u00A0');
    });
    
    if(ImpText.length > 0) {
      addtext('\u000AIMPRESSION:','');
      ImpText.forEach(function(text) {
        // report.push(text);
        addtext("*" + text,'\u00A0\u00A0\u00A0');
      });
    }
    
    if(comment) {
      addtext('\u000ACOMMENT:','');
      report.push(comment.trim());
      // addtext(comment.trim(),'');
    }
    
    if(Sig) {
      Sig.forEach(function(text) {
        addtext(text,'');
      });
    }
    
    $rootScope.report = report;
    $("#reportArea").val(report.join("\n"));
    return report;
  };
});