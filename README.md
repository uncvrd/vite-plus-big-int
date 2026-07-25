 The issue is triggered by:

 ```ts
   ignore: [0n]
 ```

 Reproduce with:

 ```sh
   vp check
 ```

 This reliably produces the Do not know how to serialize a BigInt error
