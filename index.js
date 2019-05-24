const cp = require('child_process')

async function excmm(command){
  await cp.exec(command, (err, out, sterr) => {
    if(err) throw err;
    if(out) console.log(`Out: ${out}`);
    if(sterr) console.log(`sterr: ${sterr}`);
  })
}

excmm("node ./src/script --base=5 --f=1e9")
