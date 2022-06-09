package main

import (
	"fmt"
	"strconv"

	"github.com/rafaelcarvalhocaetano/blockchain/blockchain"
)

func main() {

	chain := blockchain.InitBlockChain()

	chain.AddBlock("First block")
	chain.AddBlock("Second block")
	chain.AddBlock("Third block")

	for _, block := range chain.Blocks {

		fmt.Println("========================")
		fmt.Printf("Previous Hash: %x\n", block.PrevHash)
		fmt.Printf("Data in Block: %x\n", block.Data)
		fmt.Printf("Hash: %x\n", block.PrevHash)

		fmt.Println()
		pow := blockchain.NewProof(block)
		fmt.Printf("Pow: %s\n", strconv.FormatBool(pow.Validate()))
		fmt.Println()

	}

}
